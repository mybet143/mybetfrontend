function JodiChart({ chartData }) {

  const allDays = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

  let columnCount = chartData?.[0]?.length || 7;

  if(columnCount === 7 && (chartData?.[0]?.[0] === "-" || chartData?.[0]?.[0] === "")){
    columnCount = 6;
  }

  if(columnCount === 5){
    columnCount = 5;
  }

  const visibleDays = allDays.slice(0,columnCount);

  return (

    <>

      {/* HEADER */}
      <div
        className="grid text-black font-bold text-center rounded-t-xl overflow-hidden"
        style={{ gridTemplateColumns: `repeat(${columnCount},1fr)` }}
      >
        {visibleDays.map((day)=>(
          <div
            key={day}
            className="bg-yellow-400 py-3 border border-yellow-300 text-sm md:text-base tracking-wide"
          >
            {day}
          </div>
        ))}
      </div>

      {/* DATA */}
      <div
        className="grid text-center text-lg font-semibold bg-[#020617]"
        style={{ gridTemplateColumns: `repeat(${columnCount},1fr)` }}
      >
        {chartData.map((row,rowIndex)=>{

          let fixedRow = [...row];

          // 6 column chart
          if(fixedRow.length === 7 && (fixedRow[0] === "-" || fixedRow[0] === "")){
            fixedRow = fixedRow.slice(1);
          }

          // 5 column chart
          if(fixedRow.length > columnCount){
            fixedRow = fixedRow.slice(0,columnCount);
          }

          return fixedRow.map((value,colIndex)=>(
            <div
              key={rowIndex+"-"+colIndex}
              className={`border border-[#1f2937] py-3 transition
              ${
                value === "MARKET OFF" || value === "**"
                  ? "bg-red-800/90 text-red-200 font-bold"
                  : "hover:bg-indigo-900/40 text-white"
              }`}
            >
              {value === "" ? "-" : value}
            </div>
          ))

        })}
      </div>

    </>

  );

}

export default JodiChart;