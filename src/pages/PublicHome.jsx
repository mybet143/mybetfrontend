import { useEffect, useState, useRef } from "react";
import ChartSection from "../components/ChartSection";
import JodiChart from "../components/JodiChart";
import PanelChart from "../components/PanelChart";

const API = import.meta.env.VITE_API_URL;

// const API = "http://localhost:8000";

function App() {

const [markets,setMarkets] = useState([])
const [filteredMarkets,setFilteredMarkets] = useState([])
const [search,setSearch] = useState("")
const [loading,setLoading] = useState(true)

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

const res = await fetch(`${API}/api/matka`)
const data = await res.json()

if(data.success){

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

fetchMarket()
const interval=setInterval(fetchMarket,30000)

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

const liveMarkets=filteredMarkets.filter(m=>{
if(!m.marketResult) return true
return m.marketResult.split("-").length<3
})

const publishedMarkets=filteredMarkets.filter(m=>{
if(!m.marketResult) return false
return m.marketResult.split("-").length===3
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

{/* SEARCH */}

{/* <div className="max-w-3xl mx-auto mb-8">

<input
type="text"
placeholder="🔍 Search Market..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="w-full p-4 rounded-xl bg-[#0f172a] border border-gray-700"
/>

</div> */}


{/* LOADING */}

{loading ? (

<div className="flex justify-center mt-20">
<div className="animate-spin h-12 w-12 border-t-4 border-yellow-400 rounded-full"></div>
</div>

):(

<>

{/* LIVE */}

<div className="max-w-5xl mx-auto mb-10">

<div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-center py-3 rounded-xl mb-5 font-bold animate-pulse">
🔴 LIVE / UPCOMING RESULT
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
const isLive = parts.length < 3;

return (

<div className="relative bg-[#111827] border border-gray-700 rounded-lg mb-4 overflow-hidden shadow-lg hover:shadow-yellow-500/20 transition">

{/* JODI BUTTON */}
{!isLive && (
<div
onClick={() => fetchChart(market.marketName,"jodi")}
className="absolute left-2 top-1/2 -translate-y-1/2 bg-red-600 cursor-pointer text-white text-xs px-2 py-1 rounded-md font-semibold"
>
Jodi
</div>
)}

{/* PANEL BUTTON */}
{!isLive && (
<div
onClick={() => fetchChart(market.marketName,"panel")}
className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-600 cursor-pointer text-white text-xs px-2 py-1 rounded-md font-semibold"
>
Panel
</div>
)}

{/* HEADER */}
<div className="relative px-4 py-4 bg-[#1f2937]">

<span
className={`absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold px-3 py-1 rounded-full ${
isLive
? "bg-red-600 animate-pulse"
: "bg-green-600"
}`}
>
{isLive ? "LIVE / UPCOMING" : "PUBLISHED"}
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
className={`font-bold text-3xl tracking-widest ${
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

</>
)}

</div>


</div>



)

}

export default App