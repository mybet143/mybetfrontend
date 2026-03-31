import { useEffect, useState } from "react"
import socket from "../../utils/socket" 


const API = import.meta.env.VITE_API_URL;

// const API = "http://localhost:8000"

function AdminResult() {

  const defaultTime = {
    open: { h: "01", m: "00", p: "AM" },
    close: { h: "01", m: "00", p: "AM" }
  }

  const [markets, setMarkets] = useState([])
  const [newMarket, setNewMarket] = useState("")
  const [result, setResult] = useState({})
  const [newTime, setNewTime] = useState(defaultTime)

  useEffect(() => {
    fetchMarkets()
  }, [])

  useEffect(() => {
    socket.on("resultUpdated", (updatedMarket) => {
      setMarkets(prev =>
        prev.map(m =>
          m.marketName === updatedMarket.marketName
            ? { ...m, ...updatedMarket }
            : m
        )
      )
    })

    return () => socket.off("resultUpdated")
  }, [])

  const fetchMarkets = async () => {
    const res = await fetch(`${API}/api/custom-markets`)
    const data = await res.json()

    if (data.success) {
      setMarkets(data.data)

      const initialResult = {}
      data.data.forEach((m) => {
        initialResult[m.marketName] = {
          open: m.openPanna || "",
          jodi: m.jodi || "",
          close: m.closePanna || ""
        }
      })

      setResult(initialResult)
    }
  }

  const formatTime = (t) => {
    if (!t || !t.h) return ""
    return `${t.h}:${t.m || "00"} ${t.p || "AM"}`
  }

  const createMarket = async () => {
    const token = localStorage.getItem("adminToken")

    if (!newMarket) {
      alert("Enter market name ❌")
      return
    }

    const open = formatTime(newTime.open)
    const close = formatTime(newTime.close)

    const formattedTime = `${open} - ${close}`

    const res = await fetch(`${API}/api/admin/custom-market`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        marketName: newMarket.toUpperCase(),
        marketTime: formattedTime
      })
    })

    const data = await res.json()

    if (!data.success) {
      alert("Error ❌")
      return
    }

    setNewMarket("")
    setNewTime(defaultTime) // 🔥 FIXED (IMPORTANT)

    fetchMarkets()
  }

  const updateResult = async (marketName) => {
    const token = localStorage.getItem("adminToken")

    await fetch(`${API}/api/admin/result-update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        marketName,
        openPanna: result[marketName]?.open || "",
        jodi: result[marketName]?.jodi || "",
        closePanna: result[marketName]?.close || ""
      })
    })

    alert("Result Updated")
    fetchMarkets()
  }
const deleteMarket = async (id) => {
  console.log("DELETE CLICK ID:", id); // 🔥

  const token = localStorage.getItem("adminToken");

  const res = await fetch(`${API}/api/admin/custom-market/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  console.log("DELETE RESPONSE:", data); // 🔥

  if (data.success) {
    alert("Deleted ✅");
    fetchMarkets();
  } else {
    alert(data.message || "Delete failed ❌");
  }
};

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6">

      <h1 className="text-2xl font-bold mb-6">
        Admin Result Panel
      </h1>

      <div className="bg-[#1e293b] p-4 rounded mb-6">
        <h2 className="text-yellow-400 mb-2">Create Market</h2>

        <div className="flex gap-4 items-end flex-wrap">

          {/* MARKET NAME */}
          <div className="flex flex-col">
            <label className="text-xs text-gray-400 mb-1">Market Name</label>
            <input
              placeholder="Enter Market Name"
              value={newMarket}
              onChange={(e) => setNewMarket(e.target.value.toUpperCase())}
              className="bg-gray-800 p-2 rounded w-48"
            />
          </div>

          {/* OPEN TIME */}
          <div className="flex flex-col">
            <label className="text-xs text-green-400 mb-1">Open Time</label>

            <div className="flex gap-2 bg-gray-800 p-2 rounded">

              <select
                value={newTime.open?.h || "01"}
                onChange={(e) =>
                  setNewTime({
                    ...newTime,
                    open: { ...(newTime.open || {}), h: e.target.value }
                  })
                }
                className="bg-white text-black px-2 py-1 rounded"
              >
                {[...Array(12)].map((_, i) => {
                  const val = String(i + 1).padStart(2, "0")
                  return <option key={val}>{val}</option>
                })}
              </select>

              <span>:</span>

              <select
                value={newTime.open?.m || "00"}
                onChange={(e) =>
                  setNewTime({
                    ...newTime,
                    open: { ...(newTime.open || {}), m: e.target.value }
                  })
                }
                className="bg-white text-black px-2 py-1 rounded"
              >
                {[...Array(60)].map((_, i) => {
                  const val = String(i).padStart(2, "0")
                  return <option key={val}>{val}</option>
                })}
              </select>

              <select
                value={newTime.open?.p || "AM"}
                onChange={(e) =>
                  setNewTime({
                    ...newTime,
                    open: { ...(newTime.open || {}), p: e.target.value }
                  })
                }
                className="bg-white text-black px-2 py-1 rounded"
              >
                <option>AM</option>
                <option>PM</option>
              </select>

            </div>
          </div>

          {/* CLOSE TIME */}
          <div className="flex flex-col">
            <label className="text-xs text-red-400 mb-1">Close Time</label>

            <div className="flex gap-2 bg-gray-800 p-2 rounded">

              <select
                value={newTime.close?.h || "01"}
                onChange={(e) =>
                  setNewTime({
                    ...newTime,
                    close: { ...(newTime.close || {}), h: e.target.value }
                  })
                }
                className="bg-white text-black px-2 py-1 rounded"
              >
                {[...Array(12)].map((_, i) => {
                  const val = String(i + 1).padStart(2, "0")
                  return <option key={val}>{val}</option>
                })}
              </select>

              <span>:</span>

              <select
                value={newTime.close?.m || "00"}
                onChange={(e) =>
                  setNewTime({
                    ...newTime,
                    close: { ...(newTime.close || {}), m: e.target.value }
                  })
                }
                className="bg-white text-black px-2 py-1 rounded"
              >
                {[...Array(60)].map((_, i) => {
                  const val = String(i).padStart(2, "0")
                  return <option key={val}>{val}</option>
                })}
              </select>

              <select
                value={newTime.close?.p || "AM"}
                onChange={(e) =>
                  setNewTime({
                    ...newTime,
                    close: { ...(newTime.close || {}), p: e.target.value }
                  })
                }
                className="bg-white text-black px-2 py-1 rounded"
              >
                <option>AM</option>
                <option>PM</option>
              </select>

            </div>
          </div>

          <button
            onClick={createMarket}
            className="bg-green-600 px-5 py-2 rounded h-[40px]"
          >
            Create
          </button>

        </div>
      </div>

      {markets.map((m) => (
        <div key={m._id || m.marketName} className="bg-[#1e293b] p-4 mb-4 rounded">

          <h2 className="text-yellow-400">{m.marketName}</h2>
          <p className="text-gray-400 mb-2">{m.marketTime}</p>

          <div className="flex gap-2">

            <input
              placeholder="Open 3 Digit"
              value={result[m.marketName]?.open || ""}
              className="bg-gray-800 p-2 rounded w-24"
              onChange={(e) => setResult({
                ...result,
                [m.marketName]: {
                  ...result[m.marketName],
                  open: e.target.value.toUpperCase()
                }
              })}
            />

            <input
              placeholder="Jodi"
              value={result[m.marketName]?.jodi || ""}
              className="bg-gray-800 p-2 rounded w-20"
              onChange={(e) => setResult({
                ...result,
                [m.marketName]: {
                  ...result[m.marketName],
                  jodi: e.target.value
                }
              })}
            />

            <input
              placeholder="Close 3 Digit"
              value={result[m.marketName]?.close || ""}
              className="bg-gray-800 p-2 rounded w-24"
              onChange={(e) => setResult({
                ...result,
                [m.marketName]: {
                  ...result[m.marketName],
                  close: e.target.value
                }
              })}
            />

            <button
              onClick={() => updateResult(m.marketName)}
              className="bg-green-600 px-4 rounded"
            >
              Update
            </button>

            <button
              onClick={() => deleteMarket(m._id)}
              className="bg-red-600 px-4 rounded"
            >
              Delete
            </button>

          </div>
        </div>
      ))}

    </div>
  )
}

export default AdminResult