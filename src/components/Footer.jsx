import React from "react";
import { Link } from "react-router-dom";
import { FaTelegramPlane, FaWhatsapp, FaFacebook, FaInstagram, FaYoutube,FaLock, FaShieldAlt  } from "react-icons/fa";
import { SiLetsencrypt } from "react-icons/si";

const Footer = () => {
return ( <footer className="bg-[#020617] text-gray-300  pb-10 px-6 border-t border-white/10 md:pt-8">


  <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

    {/* BRAND */}
    <div>

      <img
        src="/mybet.png"
        alt="MyBet Logo"
        className="w-44 mb-4 relative right-[2.5rem]"
      />

      <h1 className="text-white text-xl font-bold mb-3 ">
        My Bet
      </h1>

      <p className="text-sm leading-6 mb-4 text-gray-400">
        Trusted Since 2012. AI-based Satta Matka predictions,
        real-time market updates and secure payout system.
      </p>

      <p className="text-xs text-gray-500">
        MyBet – Powered by Trust. Driven by Technology.
      </p>

    </div>

    {/* QUICK LINKS */}
    <div>

      <h3 className="text-lg font-semibold text-white mb-6">
       About Us
      </h3>

      <ul className="space-y-3 text-sm">

        <li>
          <Link to="/about" className="hover:text-yellow-400 transition">
            About Us
          </Link>
        </li>

        <li>
          <Link to="/privacy" className="hover:text-yellow-400 transition">
            Privacy Policy
          </Link>
        </li>

   

      </ul>

    </div>

    {/* LEGAL */}
    <div>

      <h3 className="text-lg font-semibold text-white mb-6">
       Quick Links
      </h3>
<ul className="space-y-3 text-sm">

  <li>
    <a href="#market" className="hover:text-yellow-400 cursor-pointer">
      Live Result
    </a>
  </li>

  <li>
    <a href="#chart" className="hover:text-yellow-400 cursor-pointer">
      Chart
    </a>
  </li>

  <li>
    <a className="hover:text-yellow-400 cursor-pointer">
      App Download
    </a>
  </li>

</ul>

    </div>

    {/* COMMUNITY */}
    <div>

      <h3 className="text-white font-semibold mb-6 text-lg">
Customer support 

      </h3>

      <div className="flex flex-col gap-4">

        {/* TELEGRAM */}
<a
  href="https://t.me/mybet_Team"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 border border-blue-500/40 bg-blue-500/10 rounded-lg p-3 hover:bg-blue-500/20 transition"
>
  <FaTelegramPlane size={20} className="text-blue-400"/>

  <div className="flex flex-col">
    <span className="text-white text-sm font-medium">
      Telegram Support
    </span>

    <span className="text-gray-400 text-xs">
      @mybet_Team
    </span>
  </div>

</a>

        {/* WHATSAPP */}
    <a
href="https://wa.me/919690325764?text=Hello%20MyBet%20Support"
  target="_blank"
  className="flex items-center gap-3 border border-green-500/40 bg-green-500/10 rounded-lg p-3 hover:bg-green-500/20 transition"
>
  <FaWhatsapp size={20} className="text-green-400"/>

  <div className="flex flex-col">
    <span className="text-white text-sm font-medium">
      WhatsApp Support
    </span>

    <span className="text-gray-400 text-xs">
      +91 96903 25764
    </span>
  </div>

</a>

      </div>

      {/* SOCIAL ICONS */}
      <div className="flex gap-4 mt-6">

        <a
          href="https://facebook.com"
          target="_blank"
          className="bg-white/5 border border-white/10 p-3 rounded-lg hover:border-yellow-400 transition"
        >
          <FaFacebook />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          className="bg-white/5 border border-white/10 p-3 rounded-lg hover:border-yellow-400 transition"
        >
          <FaInstagram />
        </a>

        <a
          href="https://youtube.com"
          target="_blank"
          className="bg-white/5 border border-white/10 p-3 rounded-lg hover:border-yellow-400 transition"
        >
          <FaYoutube />
        </a>

      </div>

    </div>

  </div>

  {/* SECURITY BADGES */}



  {/* DISCLAIMER */}

<div className="mt-12 border-t border-white/10 pt-8 text-gray-400 text-sm leading-7">

<h4 className="text-white font-semibold mb-4">
Disclaimer – MyBet Satta Matka APP
</h4>

<p className="mb-4">
The information provided on MyBet Satta Matka is for informational and entertainment purposes only.
By accessing or using our application, website, or services, you agree to the following terms and
conditions outlined in this disclaimer.
</p>

<h5 className="text-white font-medium mt-6 mb-2">General Information</h5>

<p className="mb-4">
MyBet provides market updates, analytical reports, AI-based predictions, and tips based on
historical data, statistical analysis, and market trends. We do not guarantee the accuracy,
completeness, or reliability of any prediction or result displayed on the platform.
</p>

<h5 className="text-white font-medium mt-6 mb-2">No Guarantee of Winning</h5>

<p className="mb-4">
All tips, predictions, and analysis shared on MyBet are based on research and automated systems.
Market outcomes are uncertain and involve risk. We do not guarantee winnings, profits,
or fixed results under any circumstances.
</p>

<h5 className="text-white font-medium mt-6 mb-2">User Responsibility</h5>

<p className="mb-4">
Users are solely responsible for their decisions and activities while using the MyBet platform.
We strongly encourage users to participate responsibly and within their financial limits.
</p>

<h5 className="text-white font-medium mt-6 mb-2">Legal Compliance</h5>

<p className="mb-4">
Online gaming or betting laws vary by region. It is the responsibility of users to ensure
that accessing or using such services is legal in their respective jurisdiction. MyBet does
not promote illegal activities and shall not be held liable for misuse of the platform.
</p>

<h5 className="text-white font-medium mt-6 mb-2">Third-Party Content</h5>

<p className="mb-4">
MyBet may display information or links related to third-party markets or services. We are not
responsible for the content, accuracy, or practices of third-party platforms.
</p>

<h5 className="text-white font-medium mt-6 mb-2">Limitation of Liability</h5>

<p className="mb-4">
MyBet, its owners, developers, or partners shall not be held liable for any financial loss,
damages, or consequences resulting from the use of information, tips, predictions,
or services available on the platform.
</p>

<h5 className="text-white font-medium mt-6 mb-2">Responsible Use</h5>

<p>
Users must be 18 years or older to use the platform. We promote responsible participation
and discourage excessive or harmful usage.
</p>

<p className="mt-6">
By using MyBet, you acknowledge that you have read, understood, and agreed to this Disclaimer.
</p>

</div>

  {/* COPYRIGHT */}

  <div className="mt-10 pt-5 text-center text-xs text-gray-500 border-t border-gray-800  ">
    © {new Date().getFullYear()} MyBet. All Rights Reserved.
  </div>

</footer>


);
};

export default Footer;
