import { useEffect, useState, useRef } from "react";
import ChartSection from "../components/ChartSection";
import JodiChart from "../components/JodiChart";
import PanelChart from "../components/PanelChart";
import SupportWidget from "../components/SupportWidget";

const API = import.meta.env.VITE_API_URL;

// const API = "http://localhost:8000";


function getCurrentTime() {
  const now = new Date()

  return now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  })
}



function App() {

const [markets,setMarkets] = useState([])
const [filteredMarkets,setFilteredMarkets] = useState([])
const [search,setSearch] = useState("")
const [loading,setLoading] = useState(true)
const [lastUpdated,setLastUpdated] = useState("")
const [showModal,setShowModal] = useState(false)
const [selectedMarket,setSelectedMarket] = useState(null)
const [chartData,setChartData] = useState([])
const [chartLoading,setChartLoading] = useState(false)
const [chartType,setChartType] = useState("jodi")
const modalContentRef = useRef(null)
const previousResults = useRef({})
const [blinkMarkets,setBlinkMarkets] = useState({})


/* ================= FETCH MARKETS ================= */

const fetchMarket = async ()=>{

try{

const res = await fetch(`${API}/api/matka`,{
cache:"no-store"
})
const data = await res.json()

if(data.success){

const now = new Date()

const formatted =
now.toLocaleDateString() +
" " +
now.toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"})

setLastUpdated(formatted)

const newBlink={}

data.data.forEach(m=>{

const prev=previousResults.current[m.marketName]

if(prev && prev!==m.marketResult){
newBlink[m.marketName]=true
}

previousResults.current[m.marketName]=m.marketResult

})

setBlinkMarkets(newBlink)

setMarkets(data.data)
setFilteredMarkets(data.data)

setTimeout(()=>setBlinkMarkets({}),4000)

}

setLoading(false)

}catch(e){

console.log(e)
setLoading(false)

}

}

useEffect(()=>{

// instant load
fetchMarket()

// update every 2 minutes
const interval=setInterval(fetchMarket,120000)

return ()=>clearInterval(interval)

},[])


/* ================= SEARCH ================= */

useEffect(()=>{

const filtered=markets.filter(m=>
m.marketName.toLowerCase().includes(search.toLowerCase())
)

setFilteredMarkets(filtered)

},[search,markets])


/* ================= SPLIT LIVE / PUBLISHED ================= */

/* ================= SPLIT 3 PHASES ================= */

const upcomingMarkets = filteredMarkets.filter(m=>{
return !m.marketResult || m.marketResult === "" || m.marketResult.includes("Loading")
})

const liveMarkets = filteredMarkets.filter(m=>{
if(!m.marketResult) return false
return m.marketResult.split("-").length === 2
})

const publishedMarkets = filteredMarkets.filter(m=>{
if(!m.marketResult) return false
return m.marketResult.split("-").length === 3
})


/* ================= FETCH CHART ================= */

const fetchChart = async(marketName,type="jodi")=>{

const cleanName = marketName.replace(" Chart","").replace(" chart","").trim()

setChartType(type)

try{

setChartLoading(true)

const res=await fetch(`${API}/api/chart/${encodeURIComponent(cleanName)}?type=${type}`)

// const res=await fetch("http://localhost:8080/api/chart/${encodeURIComponent(cleanName)}?type=${type}")

const data=await res.json()

if(!data.hasChart){
alert("Chart Not Available")
setChartLoading(false)
return
}

setChartData(data.data)
setSelectedMarket(cleanName)
setChartLoading(false)
setShowModal(true)

}catch(e){

console.log(e)
setChartLoading(false)

}

}




/* ================= UI ================= */

return(

<div className="min-h-screen bg-[#020617] text-white p-5 relative overflow-hidden" id="market">



{/* LOADING */}

{loading ? (

<div className="flex justify-center mt-20">
<div className="animate-spin h-12 w-12 border-t-4 border-yellow-400 rounded-full"></div>
</div>

):(

<>

{/* UPCOMING */}

{upcomingMarkets.length > 0 && (

<div className="max-w-5xl mx-auto mb-10">

<div className="bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 text-center py-3 rounded-xl mb-5 font-bold animate-pulse">
⏳ PENDING RESULT
</div>

{upcomingMarkets.map((m,i)=>(
<MarketCard
key={i}
market={m}
fetchChart={fetchChart}
blink={blinkMarkets[m.marketName]}
/>
))}

</div>

)}

{/* LIVE */}

<div className="max-w-5xl mx-auto mb-10">

<div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-center py-3 rounded-xl mb-5 font-bold animate-pulse">
🔴 LIVE RESULT
</div>

{liveMarkets.map((m,i)=>(
<MarketCard
key={i}
market={m}
fetchChart={fetchChart}
blink={blinkMarkets[m.marketName]}
/>
))}

</div>


{/* PUBLISHED */}

<div className="max-w-5xl mx-auto">

<div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-center py-3 rounded-xl mb-5 font-bold">
📁 PUBLISHED RESULT
</div>



{publishedMarkets.map((m,i)=>(
<MarketCard
key={i}
market={m}
fetchChart={fetchChart}
blink={blinkMarkets[m.marketName]}
/>
))}

</div>


<ChartSection
markets={filteredMarkets}
onOpenChart={fetchChart}
/>

</>

)}


{/* MODAL */}

{showModal && (

<div
className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
onClick={()=>setShowModal(false)}
>

<div
ref={modalContentRef}
className="bg-[#020617] p-6 rounded-3xl w-[95%] md:w-[900px] max-h-[85vh] overflow-y-auto relative"
onClick={(e)=>e.stopPropagation()}
>

{/* CLOSE BUTTON */}

<button
onClick={()=>setShowModal(false)}
className="absolute top-3 right-4 text-red-500 text-2xl"
>
✕
</button>


{/* HEADER */}

<div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-center py-3 rounded-xl mb-4 font-bold">

{selectedMarket} MATKA {chartType==="panel"?"PANEL":"JODI"} RECORD

</div>


{/* GO BOTTOM BUTTON */}

<div className="flex justify-end mb-4">

<button
onClick={()=>{
modalContentRef.current.scrollTo({
top: modalContentRef.current.scrollHeight,
behavior:"smooth"
})
}}
className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-1 rounded-lg font-semibold"
>

⬇ Go Bottom

</button>

</div>


{/* CHART */}

{/* CHART */}

{chartLoading ? (

<div className="flex justify-center items-center h-40">
<div className="animate-spin rounded-full h-14 w-14 border-t-4 border-yellow-400"></div>
</div>

) : (

chartType==="panel"
? <PanelChart chartData={chartData}/>
: <JodiChart chartData={chartData}/>

)}


{/* GO TOP BUTTON */}

<div className="flex justify-center mt-6">

<button
onClick={()=>{
modalContentRef.current.scrollTo({
top:0,
behavior:"smooth"
})
}}
className="bg-green-500 hover:bg-green-600 text-black px-5 py-2 rounded-xl font-semibold"
>

⬆ Go Top

</button>

</div>

</div>

</div>

)}

</div>

)

}


/* ================= MARKET CARD ================= */

function MarketCard({ market, fetchChart, blink }) {

const result = market.marketResult || "";
const parts = result.split("-");
const isUpcoming = !result || result === "" || result.includes("Loading")
const isLive = parts.length === 2
const isPublished = parts.length === 3
const [btnLoading,setBtnLoading] = useState(null)

const getResultTime = () => {

if(!market.marketTime) return ""

const parts = market.marketTime.split("-")

return parts[1]?.trim() || parts[0]?.trim()

}

const today = new Date().toLocaleDateString("en-IN", {
day: "2-digit",
month: "2-digit",
year: "numeric"
})

const lastUpdated = `${today} ${getResultTime()}`

const getUpcomingTime = () => {

if(!market.marketTime) return ""

const parts = market.marketTime.split("-")

return parts[1]?.trim()

}

return (

<div className="relative bg-[#111827] border border-gray-700 rounded-lg mb-4 overflow-hidden shadow-lg hover:shadow-yellow-500/20 transition">

{/* JODI BUTTON */}
{isPublished && (
<div
onClick={async () => {
  setBtnLoading("jodi")
  await fetchChart(market.marketName,"jodi")
  setBtnLoading(null)
}}
className={`absolute left-2 top-1/2 -translate-y-1/2 px-2 py-1 rounded-md text-xs font-semibold flex items-center gap-1
${btnLoading ? "bg-gray-600 cursor-not-allowed" : "bg-red-600 cursor-pointer"}
`}
>

{btnLoading === "jodi" ? (
<span className="animate-spin">⏳</span>
) : (
"Jodi"
)}

</div>
)}

{/* PANEL BUTTON */}
{isPublished && (
<div
onClick={async () => {
  setBtnLoading("panel")
  await fetchChart(market.marketName,"panel")
  setBtnLoading(null)
}}
className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-600 cursor-pointer text-white text-xs px-2 py-1 rounded-md font-semibold flex items-center gap-1"
>

{btnLoading === "panel" ? (
<span className="animate-spin">⏳</span>
) : (
"Panel"
)}

</div>
)}
{/* HEADER */}
<div className="relative px-4 py-4 bg-[#1f2937] ">

<span
className={`absolute right-4 top-1/2 -translate-y-1/2 text-xs max-md:text-[8px] max-md:px-2  max-md:right-1 font-semibold px-3 py-1 rounded-full ${
isUpcoming
? "bg-gray-500 animate-pulse"
: isLive
? "bg-red-500 shadow-lg shadow-red-500/40 animate-pulse"
: "bg-green-600"
}`}
>
{isUpcoming ? "PENDING" : isLive ? "LIVE" : "PUBLISHED"}
</span>

</div>

{/* RESULT */}
<div className="text-center py-6">

<h2 className="text-lg font-bold text-yellow-400 tracking-wide">
{market.marketName}
</h2>

{result === "" ? (
<div className="text-gray-400 text-xl animate-pulse">
⏳ Loading...
</div>
) : (
<>
<div
className={`font-bold text-2xl tracking-widest ${
blink ? "animate-pulse text-yellow-400" : "text-white"
}`}
>
{result}
</div>

{!isLive && market.marketTime && (
<div className="text-base text-white mt-2">
{market.marketTime}
</div>
)}


{/* {isLive && (
<div className="text-xs text-yellow-400 mt-1">
Upcoming Result: {getUpcomingTime()}
</div>
)} */}




{isLive && (
<div className="mt-3">
<button
onClick={() => window.location.reload()}
className="px-4 py-1 text-[10px] bg-yellow-500 hover:bg-yellow-100 text-black rounded-md font-semibold"
>
 Refresh
</button>
</div>
)}



</>
)}

</div>





<SupportWidget/>
</div>



)

}

export default App