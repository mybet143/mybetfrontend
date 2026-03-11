function ChartSection({ onOpenChart }) {

const sattaJodi = [
"Kalyan",
"Main Bazar",
"Main Ratan",
"Main Mumbai",
"Time Bazar",
"Sridevi Satta",
"Sridevi Night",
"Kalyan Night",
"Kalyan Morning",
"Madhur Morning",
"Milan Day",
"Milan Night",
"Madhur Day",
"Madhur Night",
"Supreme Day",
"Supreme Night",
"Rajdhani Day",
"Rajdhani Night",
"Syndicate Night",
"Morning Syndicate"
];


const otherJodi = [
"Dabra",
"Deluxe",
"Khajana",
"Prabhat",
"Balaji Day",
"Maharani",
"Star Morning",
"Prabhat Night",
"Karodpati",
"Kbc Bombay",
"Maharani Day",
"Maharani Night",
"Karnataka Day",
"Karnataka Night",
"Raja Rani Morning"
];


const Row = ({name,type}) => (
<div
onClick={() => onOpenChart(name,type.includes("Panel") ? "panel":"jodi")}
className="bg-[#111827] text-yellow-500 font-semibold text-center py-3 cursor-pointer border-2 border-[#1f2937] hover:bg-[#27324a] transition" id="chart"
>
{name} {type}
</div>
)

return (

<div className="max-w-4xl mx-auto mt-16">

{/* SATTA MATKA JODI */}
<div className="bg-purple-700 text-yellow-300 font-bold text-center py-3 rounded-lg mb-4">
⇛ SATTA MATKA JODI CHART RECORDS
</div>

{sattaJodi.map((m,i)=>(
<Row key={i} name={m} type="Chart"/>
))}





{/* OTHER JODI */}
<div className="bg-purple-700 text-yellow-300 font-bold text-center py-3 rounded-lg mt-10 mb-4">
⇛ OTHER MATKA BAZAR JODI CHART RECORDS
</div>

{otherJodi.map((m,i)=>(
<Row key={i} name={m} type="Chart"/>
))}




</div>
)
}

export default ChartSection;