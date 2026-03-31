"use client";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function AboutPage() {

const stats = [
{ number:"2012", label:"Trusted Since" },
{ number:"120K+", label:"Active Users" },
{ number:"24/7", label:"Market Updates" },
{ number:"100%", label:"Secure Platform" }
]

const navigate = useNavigate();

return (

<div className="bg-[#020617] text-white overflow-hidden">

    {/* TOP BAR */}
<div className="w-full border-b border-white/10 backdrop-blur-lg bg-black/30 sticky top-0 z-50">

<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
   <Link to="/">
    <img src="/mybet.png" alt="logo" className="w-14 h-12 cursor-pointer" />
  </Link>
<button
onClick={()=>navigate(-1)}
className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold transition"
>
← Back
</button>



</div>

</div>

{/* HERO */}
<section className="relative py-5 text-center">

<div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 via-orange-500/20 to-yellow-500/20 blur-3xl"></div>

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
className="text-3xl font-bold text-yellow-400"
>
About MyBet
</motion.h1>

<p className="max-w-3xl mx-auto mt-6 text-sm text-gray-300 leading-relaxed">

MyBet is a leading Satta Matka application trusted by users across India since 2012. 
With over a decade of experience in the market, we have built a strong reputation based on transparency, reliability, and technological innovation. 
Our platform is designed to deliver accurate market updates, data-driven insights, and a seamless user experience.

</p>

</section>


{/* TRUST STATS */}
<section className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6 py-5">

{stats.map((s,i)=>(
<motion.div
key={i}
whileHover={{scale:1.05}}
className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4 text-center"
>

<h2 className="text-3xl font-bold text-yellow-400 max-md:text-xl">{s.number}</h2>
<p className="text-gray-300 mt-2">{s.label}</p>

</motion.div>
))}

</section>


{/* MARKETS */}
<section className="max-w-3xl mx-auto px-6 py-5">

<h2 className="text-3xl text-center font-bold text-yellow-400 mb-4   ">
Major Markets Covered
</h2>

<ul className="grid md:grid-cols-2 gap-4 text-gray-300 text-sm text-center">

<li>• Milan Market</li>
<li>• Main Market</li>
<li>• Kalyan Market</li>
<li>• Rajdhani Market</li>
<li>• Sridevi Market</li>
<li>• And other leading markets</li>

</ul>

</section>


{/* FEATURES */}
<section className="max-w-6xl mx-auto px-6 py-5">

<h2 className="text-3xl font-bold text-yellow-400 mb-5 text-center">
What We Offer
</h2>

<div className="grid md:grid-cols-2 gap-4">

<motion.div whileHover={{scale:1.03}}
className="p-8 rounded-xl bg-gradient-to-br from-[#0f172a] to-[#020617] border border-yellow-500/20">

<h3 className="text-xl font-semibold mb-3">AI-Based Predictions</h3>

<p className="text-gray-300 text-[12px]">
Our advanced AI-powered system analyzes historical trends and market patterns to generate intelligent forecasting insights.
</p>

</motion.div>


<motion.div whileHover={{scale:1.03}}
className="p-8 rounded-xl bg-gradient-to-br from-[#0f172a] to-[#020617] border border-yellow-500/20">

<h3 className="text-xl font-semibold mb-3">Daily Analytical Reports</h3>

<p className="text-gray-300 text-[12px]">
We deliver detailed daily reports to help users understand market movements, trends, and performance data.
</p>

</motion.div>


<motion.div whileHover={{scale:1.03}}
className="p-8 rounded-xl bg-gradient-to-br from-[#0f172a] to-[#020617] border border-yellow-500/20">

<h3 className="text-xl font-semibold mb-3">Free Weekly Tips</h3>

<p className="text-gray-300 text-[12px]">
Our expert team provides carefully researched weekly tips designed to enhance decision-making confidence.
</p>

</motion.div>


<motion.div whileHover={{scale:1.03}}
className="p-8 rounded-xl bg-gradient-to-br from-[#0f172a] to-[#020617] border border-yellow-500/20">

<h3 className="text-xl font-semibold mb-3">Real-Time Market Updates</h3>

<p className="text-gray-300 text-[12px]">
Access fast, accurate, and reliable market results all in one platform
</p>

</motion.div>

</div>

</section>


{/* MISSION */}
<section className="max-w-5xl mx-auto px-6 py-5">

<h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
Our Mission
</h2>

<p className="text-gray-300 text-sm leading-relaxed">

Our mission is to provide a transparent, technology-driven, and reliable platform that empowers users with accurate information and smart analytical tools. 
We aim to continuously improve our AI systems, enhance user experience, and maintain the highest standards of trust and integrity in the industry.

</p>

<ul className="mt-6 space-y-3 text-gray-300 text-sm">

<li>• Delivering consistent and accurate market insights</li>
<li>• Leveraging advanced AI technology for smarter predictions</li>
<li>• Maintaining transparency and fairness</li>
<li>• Ensuring user satisfaction and long-term trus</li>

</ul>

</section>


{/* VISION */}
<section className="max-w-5xl mx-auto px-6 py-5">

<h2 className="text-3xl font-bold text-yellow-400 mb-2 text-center">
Our Vision
</h2>

<p className="text-gray-300  leading-relaxed text-sm">

Our vision is to serve millions of users globally by becoming the most trusted and innovative Satta Matka platform. 
We strive to set new industry benchmarks through technology, performance, and customer-centric services.

</p>

<p className="mt-6 text-gray-300 text-[12px]">
At MyBet, we believe in building long-term relationships through trust, innovation, and excellence.
</p>

</section>


{/* CTA */}
<section className="text-center py-5 px-5 border-t border-white/10">

<h2 className="text-xl font-bold text-yellow-400">
MyBet – Powered by Trust. Driven by Technology.
</h2>

<p className="text-gray-400 mt-6 max-w-2xl mx-auto">
Disclaimer: All predictions and tips are based on analytical models and past data. Outcomes may vary. Users are advised to participate responsibly.
</p>

</section>
<Footer/>

</div>

)
}