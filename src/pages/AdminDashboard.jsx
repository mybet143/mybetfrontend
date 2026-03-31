// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function AdminDashboard() {
//   const navigate = useNavigate();
//   const [markets, setMarkets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [newMarket,setNewMarket]=useState("")
// const [newTime,setNewTime]=useState("")


//   const logout = () => {
//     localStorage.removeItem("adminToken");
//     navigate("/admin/login");
//   };

// const API = import.meta.env.VITE_API_URL;

// // const API = "http://localhost:8000";



// const createMarket=async()=>{

// const token=localStorage.getItem("adminToken")

// const res=await fetch(`${API}/api/admin/custom-market`,{
// method:"POST",
// headers:{
// "Content-Type":"application/json",
// Authorization:`Bearer ${token}`
// },
// body:JSON.stringify({
// marketName:newMarket,
// marketTime:newTime
// })
// })

// const data=await res.json()

// if(data.success){
// alert("Market Created")
// setNewMarket("")
// setNewTime("")
// fetchAllMarkets()
// }

// }

//   // ==============================
//   // FETCH ALL MARKETS
//   // ==============================
//   const fetchAllMarkets = async () => {
//     try {
//        const res1 = await fetch(`${API}/api/admin/all-markets`);
//       const data1 = await res1.json();

//       const res2 = await fetch(`
//         ${API}/api/admin/markets `
//       );
//       const data2 = await res2.json();

//       if (!data1.success) {
//         setLoading(false);
//         return;
//       }

//       const controls = data2.success ? data2.data : [];

//       const combined = data1.data.map((m) => {
//         const control = controls.find(
//           (c) => c.marketName === m.marketName
//         );

//         return {
//           marketName: m.marketName,
//           isVisible: control ? control.isVisible : true,
//         };
//       });

//       setMarkets(combined);
//       setLoading(false);

//     } catch (err) {
//       console.log("Fetch error:", err);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAllMarkets();
//   }, []);

//   // ==============================
//   // TOGGLE MARKET
//   // ==============================
//   const toggleMarket = (marketName) => {
//     setMarkets((prev) =>
//       prev.map((m) =>
//         m.marketName === marketName
//           ? { ...m, isVisible: !m.isVisible }
//           : m
//       )
//     );
//   };

//   // ==============================
//   // SAVE CHANGES
//   // ==============================
//   const saveChanges = async () => {
//     try {
//       setSaving(true);

//       const res = await fetch( `
//         ${API}/api/admin/markets/update `,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ markets }),
//         }
//       );

//       const data = await res.json();

//       if (data.success) {
//         alert("Markets Updated Successfully ✅");
//         fetchAllMarkets(); // refresh after save
//       } else {
//         alert("Update Failed ❌");
//       }

//     } catch (err) {
//       console.log("Save error:", err);
//       alert("Server Error ❌");
//     } finally {
//       setSaving(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center">
//         Loading...
//       </div>
//     );
//   }

//   const liveMarkets = markets.filter((m) => m.isVisible);
//   const hiddenMarkets = markets.filter((m) => !m.isVisible);

//   return (
//     <div className="min-h-screen bg-[#0f172a] text-white">
      
       
//         <button
//   onClick={() => navigate("/admin/banner")}
//   className="bg-blue-600 px-4 py-1 rounded mr-3"
// >
//   Banner Settings
// </button>
      

//       {/* Navbar */}
// <div className="bg-[#1e293b] p-4 flex justify-between items-center shadow">
//   <h1 className="text-xl font-bold">
//     Admin Market Control
//   </h1>

//   <div className="flex gap-3">

//     <button
//       onClick={() => navigate("/admin/result")}
//       className="bg-yellow-500 px-4 py-1 rounded"
//     >
//       Result Panel
//     </button>

//     <button
//       onClick={() => navigate("/admin/banner")}
//       className="bg-blue-600 px-4 py-1 rounded"
//     >
//       Banner
//     </button>

//     <button
//       onClick={logout}
//       className="bg-red-600 px-4 py-1 rounded"
//     >
//       Logout
//     </button>

//   </div>
// </div>

//       <div className="p-8 max-w-6xl mx-auto">

//         <h2 className="text-2xl font-bold mb-6 text-center">
//           Market Visibility Control
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//           {/* LIVE MARKETS */}
//           <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
//             <h3 className="text-green-400 text-lg font-bold mb-4">
//               🟢 Visible Markets
//             </h3>

//             {liveMarkets.length === 0 && (
//               <p className="text-gray-400">
//                 No Visible Markets
//               </p>
//             )}

//             {liveMarkets.map((m) => (
//               <div
//                 key={m.marketName}
//                 className="flex justify-between items-center border-b border-gray-700 py-2"
//               >
//                 <span>{m.marketName}</span>
//                 <input
//                   type="checkbox"
//                   checked={m.isVisible}
//                   onChange={() =>
//                     toggleMarket(m.marketName)
//                   }
//                   className="w-5 h-5"
//                 />
//               </div>
//             ))}
//           </div>

//           {/* HIDDEN MARKETS */}
//           <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
//             <h3 className="text-red-400 text-lg font-bold mb-4">
//               🔴 Hidden Markets
//             </h3>

//             {hiddenMarkets.length === 0 && (
//               <p className="text-gray-400">
//                 No Hidden Markets
//               </p>
//             )}

//             {hiddenMarkets.map((m) => (
//               <div
//                 key={m.marketName}
//                 className="flex justify-between items-center border-b border-gray-700 py-2"
//               >
//                 <span>{m.marketName}</span>
//                 <input
//                   type="checkbox"
//                   checked={m.isVisible}
//                   onChange={() =>
//                     toggleMarket(m.marketName)
//                   }
//                   className="w-5 h-5"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>



//         {/* SAVE BUTTON */}
//         <div className="text-center mt-8">
//           <button
//             onClick={saveChanges}
//             disabled={saving}
//             className={`px-8 py-3 rounded-lg font-bold ${
//               saving
//                 ? "bg-gray-500"
//                 : "bg-green-600 hover:bg-green-700"
//             }`}
//           >
//             {saving ? "Saving..." : "Update Markets"}
//           </button>
//         </div>
// <div className="bg-[#1e293b] p-6 rounded-xl shadow mb-6">

// <h3 className="text-yellow-400 font-bold mb-4">
// Create Custom Market
// </h3>

// <div className="flex gap-2">

// <input
// placeholder="Market Name"
// value={newMarket}
// onChange={(e)=>setNewMarket(e.target.value)}
// className="bg-gray-800 p-2 rounded"
// />

// <input
// placeholder="Market Time"
// value={newTime}
// onChange={(e)=>setNewTime(e.target.value)}
// className="bg-gray-800 p-2 rounded"
// />

// <button
// onClick={createMarket}
// className="bg-green-600 px-4 py-2 rounded"
// >
// Create
// </button>

// </div>

// </div>

        
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;














import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminResult from "./AdminResult"; // ✅ ADD THIS

function AdminDashboard() {

  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("dashboard");

  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [newMarket, setNewMarket] = useState("");
  const [newTime, setNewTime] = useState("");

  const API = import.meta.env.VITE_API_URL;

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  // ================= CREATE MARKET =================
  const createMarket = async () => {
    const token = localStorage.getItem("adminToken");

    const res = await fetch(`${API}/api/admin/custom-market`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        marketName: newMarket,
        marketTime: newTime
      })
    });

    const data = await res.json();

    if (data.success) {
      alert("Market Created");
      setNewMarket("");
      setNewTime("");
      fetchAllMarkets();
    }
  };

  // ================= FETCH =================
  const fetchAllMarkets = async () => {
    try {
      const res1 = await fetch(`${API}/api/admin/all-markets`);
      const data1 = await res1.json();

      const res2 = await fetch(`${API}/api/admin/markets`);
      const data2 = await res2.json();

      if (!data1.success) {
        setLoading(false);
        return;
      }

      const controls = data2.success ? data2.data : [];

      const combined = data1.data.map((m) => {
        const control = controls.find(
          (c) => c.marketName === m.marketName
        );

        return {
          marketName: m.marketName,
          isVisible: control ? control.isVisible : true,
        };
      });

      setMarkets(combined);
      setLoading(false);

    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllMarkets();
  }, []);

  // ================= TOGGLE =================
  const toggleMarket = (marketName) => {
    setMarkets((prev) =>
      prev.map((m) =>
        m.marketName === marketName
          ? { ...m, isVisible: !m.isVisible }
          : m
      )
    );
  };

  // ================= SAVE =================
  const saveChanges = async () => {
    try {
      setSaving(true);

      const res = await fetch(`${API}/api/admin/markets/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ markets }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Updated ✅");
        fetchAllMarkets();
      }

    } catch (err) {
      alert("Error ❌");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#0f172a] text-white">
        Loading...
      </div>
    );
  }

  const liveMarkets = markets.filter((m) => m.isVisible);
  const hiddenMarkets = markets.filter((m) => !m.isVisible);

  return (
    <div className="flex h-screen bg-[#0f172a] text-white">

      {/* ================= SIDEBAR ================= */}
      <div className="w-64 bg-[#020617] border-r border-gray-800 flex flex-col">

        <div className="p-4 font-bold text-xl border-b">
          ⚡ Admin Panel
        </div>

        <SidebarItem
          label="Dashboard"
          active={activePage === "dashboard"}
          onClick={() => setActivePage("dashboard")}
        />

        <SidebarItem
          label="Result"
          active={activePage === "result"}
          onClick={() => setActivePage("result")}
        />

        <SidebarItem
          label="Banner"
          active={activePage === "banner"}
          onClick={() => setActivePage("banner")}
        />

        <div className="mt-auto p-4">
          <button
            onClick={logout}
            className="w-full bg-red-600 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="flex-1 overflow-y-auto p-6">

        {/* ================= DASHBOARD ================= */}
        {activePage === "dashboard" && (
          <>
            <h2 className="text-2xl font-bold mb-6">
              Market Control
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-[#1e293b] p-4 rounded">
                <h3 className="text-green-400 mb-3">
                  Visible Markets
                </h3>

                {liveMarkets.map((m) => (
                  <div key={m.marketName} className="flex justify-between mb-2">
                    {m.marketName}
                    <input
                      type="checkbox"
                      checked={m.isVisible}
                      onChange={() => toggleMarket(m.marketName)}
                    />
                  </div>
                ))}
              </div>

              <div className="bg-[#1e293b] p-4 rounded">
                <h3 className="text-red-400 mb-3">
                  Hidden Markets
                </h3>

                {hiddenMarkets.map((m) => (
                  <div key={m.marketName} className="flex justify-between mb-2">
                    {m.marketName}
                    <input
                      type="checkbox"
                      checked={m.isVisible}
                      onChange={() => toggleMarket(m.marketName)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* SAVE */}
            <div className="mt-6">
              <button
                onClick={saveChanges}
                className="bg-green-600 px-6 py-2 rounded"
              >
                {saving ? "Saving..." : "Save"}
              </button>
            </div>

            {/* CREATE MARKET */}
            <div className="bg-[#1e293b] p-4 rounded mt-6">
              <h3 className="text-yellow-400 mb-3">
                Create Market
              </h3>

              <div className="flex gap-2">
                <input
                  placeholder="Market Name"
                  value={newMarket}
                  onChange={(e) => setNewMarket(e.target.value)}
                  className="bg-gray-800 p-2 rounded"
                />

                <input
                  placeholder="Time"
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                  className="bg-gray-800 p-2 rounded"
                />

                <button
                  onClick={createMarket}
                  className="bg-green-600 px-4 rounded"
                >
                  Create
                </button>
              </div>
            </div>
          </>
        )}

        {/* ================= RESULT ================= */}
        {activePage === "result" && <AdminResult />}

        {/* ================= BANNER ================= */}
        {activePage === "banner" && (
          <div>
            <h2 className="text-xl">Banner Settings</h2>
          </div>
        )}

      </div>
    </div>
  );
}


// ================= SIDEBAR =================
function SidebarItem({ label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`p-3 cursor-pointer ${
        active ? "bg-yellow-500 text-black" : "hover:bg-gray-800"
      }`}
    >
      {label}
    </div>
  );
}

export default AdminDashboard;