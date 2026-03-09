function PanelChart({ chartData }) {

  const days = ["Date","Mon","Tue","Wed","Thu","Fri","Sat"]

  const renderPanel = (value) => {

    if(value==="**"){
      return <div className="text-white font-bold text-lg">**</div>
    }

  const nums = value.split(/\s+|\n/)

    if(nums.length < 7){
      return nums.map((n,i)=><div key={i}>{n}</div>)
    }

    const [a,b,c,j,d,e,f] = nums

    return (

      <div className="grid grid-cols-3 text-center leading-none">

        <div>{a}</div>
        <div></div>
        <div>{d}</div>

        <div>{b}</div>
        <div className="text-xl font-bold text-yellow-400">{j}</div>
        <div>{e}</div>

        <div>{c}</div>
        <div></div>
        <div>{f}</div>

      </div>

    )

  }

  return (

    <div className="w-full overflow-x-auto">

    <table className="min-w-[700px] text-center border-collapse">

        <thead>
          <tr className="bg-yellow-400 text-black font-bold">
            {days.map((d)=>(
              <th key={d} className="p-2 border">{d}</th>
            ))}
          </tr>
        </thead>

        <tbody>

          {chartData.map((row,i)=>(

            <tr key={i}>

              {row.slice(0,7).map((cell,j)=>(

                <td
                  key={j}
                  className={`border border-purple-700 bg-[#020617] py-3 text-white ${
                    cell==="**" ? "bg-red-700 text-white":"text-white"
                  }`}
                >

                  {j===0
                    ? cell.split("\n").map((d,k)=><div key={k}>{d}</div>)
                    : renderPanel(cell)
                  }

                </td>

              ))}

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )

}

export default PanelChart