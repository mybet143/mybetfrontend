import { Routes, Route } from "react-router-dom";
import PublicHome from "./pages/PublicHome";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import MainHome from "./pages/MainHome";
import AdminBanner from "./pages/AdminBanner";
import AboutUs from "./components/AboutUs";
import PrivacyPolicy from "./components/Privacy";
import AdminResult from "./pages/AdminResult";

// ✅ IMPORT
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      {/* ✅ YEH ADD KARNA HAI */}
      <ScrollToTop />

      <Routes>
        {/* Public Website */}
        <Route path="/" element={<MainHome />} />

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

        <Route path="/admin/result" element={<AdminResult />} />
        <Route path="/admin/banner" element={<AdminBanner />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
}

export default App;