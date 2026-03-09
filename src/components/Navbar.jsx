import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);

  const lastScrollY = useRef(0);

  /* ================= SIMPLE SCROLL FIX ================= */
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setAtTop(currentY < 20);

      if (currentY > lastScrollY.current && currentY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      animate={{ y: hidden ? -90 : 0 }}
      transition={{ type: "spring", stiffness: 140, damping: 22 }}
      className={`fixed top-0 left-0 w-full z-50 ${
        atTop
          ? "bg-transparent"
          : "bg-w backdrop-blur-xl border-b border-white/10"
      }`}
    >
      <div className=" mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
     <Link to="/" className="flex items-center">
  <img 
    src="/mybet.png"
    alt="MyBet Logo" 
    className="h-12 w-auto object-contain"
  />
</Link>
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">

          <div
            className="relative text-white"
            onMouseEnter={() => setActiveDropdown("markets")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-yellow-400">
              Live Markets
              <motion.div
                animate={{ rotate: activeDropdown === "markets" ? 180 : 0 }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </button>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={
                activeDropdown === "markets"
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: -10 }
              }
              className={`absolute top-8 left-0 bg-[#1E2329] border border-white/10 rounded-xl shadow-xl p-5 w-56  ${
                activeDropdown === "markets" ? "visible" : "invisible"
              }`}
            >
              <Link to="/main-bazar" className="block text-gray-400 hover:text-white">
                Main Bazar
              </Link>
              <Link to="/kalyan" className="block mt-3 text-gray-400 hover:text-white">
                Kalyan
              </Link>
              <Link to="/milan-day" className="block mt-3 text-gray-400 hover:text-white">
                Milan Day
              </Link>
            </motion.div>
          </div>

          <Link to="/results" className="hover:text-yellow-400  text-white">
            Results
          </Link>

          <Link to="/charts" className="hover:text-yellow-400 text-white">
            Charts
          </Link>

        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: mobileOpen ? "auto" : 0 }}
        className="lg:hidden bg-[#0B0E11] overflow-hidden"
      >
        <div className="flex flex-col px-6 py-6 gap-4 text-gray-300">
          <Link to="/main-bazar">Main Bazar</Link>
          <Link to="/kalyan">Kalyan</Link>
          <Link to="/results">Results</Link>
        </div>
      </motion.div>
    </motion.nav>
  );
}