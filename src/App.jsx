import { Routes, Route } from "react-router-dom";
import PublicHome from "./pages/PublicHome";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import MainHome from "./pages/MainHome";
import AdminBanner from "./pages/AdminBanner";
import AboutUs from "./components/AboutUs";
import PrivacyPolicy from "./components/Privacy";




function App() {
  return (
    <Routes>

      {/* Public Website */}
      <Route path="/" element={<MainHome/>} />

      {/* Admin Login */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* Admin Dashboard (Protected) */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/admin/banner" element={<AdminBanner />} />
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/privacy" element={<PrivacyPolicy/>}/>
      

    </Routes>
  );
}

export default App;