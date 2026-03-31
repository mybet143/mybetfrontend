






"use client";



const BannerSection = () => {
return ( <div className="relative w-full  overflow-hidden">


  {/* BACKGROUND GRADIENT */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#0b1220] to-black"></div>

  {/* GOLD LIGHT */}
  <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-yellow-500/20 via-yellow-400/10 to-transparent"></div>

  {/* LOGO */}
  <div className="absolute top-8 left-8 z-20 max-lg:left-1/2 max-lg:-translate-x-1/2">
    <img src="/mybet.png" alt="MyBet" className="w-32 max-lg:w-36" />
  </div>

  {/* MAIN CONTAINER */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-[80vh] flex flex-col lg:flex-row items-center justify-between pt-32  lg:pt-12 max-sm:px-3">

    {/* LEFT CONTENT */}
    <div className="max-w-xl text-center lg:text-left ">

      <h1 className="text-white text-4xl md:text-[45px] font-bold leading-tight">
        <span className="text-gray-200 block  max-sm:mb-0">
          Welcome to MyBet
        </span>

        <span className="text-yellow-400">
          Satta Matka App
        </span>
      </h1>

      <p className="text-gray-400 mt-3 text-lg md:text-2xl italic max-lg:mt-1">
        Play Smart. Win Big.
      </p>

      <p className="text-green-400 font-semibold mt-3 text-lg md:text-2xl max-lg:mt-1">
        Get ₹10,000 Signup Bonus – Start Betting Instantly
      </p>

      {/* BADGES */}
      <div className="mt-6 flex justify-center lg:justify-start gap-3 flex-wrap max-lg:mt-3">

        <span className="bg-yellow-500/10 backdrop-blur-md border border-yellow-400/30 px-4 py-1 rounded-full text-base text-white animate-pulse">
           Play Smart
        </span>

        <span className="bg-green-500/10 backdrop-blur-md border border-green-400/30 px-4 py-1 rounded-full text-base text-white animate-pulse">
          Instant Withdraw
        </span>

      </div>

      {/* DOWNLOAD BUTTON */}
   <div className="flex justify-start mt-8 max-lg:justify-center max-sm:mt-4">
      <a
        href="#"
        className="group relative inline-flex items-center overflow-hidden rounded-xl 
        bg-gradient-to-b from-green-400 to-green-500
        shadow-md hover:shadow-xl
        transition-all duration-200 ease-out hover:scale-105 active:scale-95"
      >
        <div className="flex items-center gap-2 px-4 py-2 max-lg:py-1">

          {/* Arrows */}
          <div className="relative flex flex-col items-center justify-center">

            <svg
              className="w-6 h-6 text-white"
              style={{
                animation: "upDownMove 0.6s cubic-bezier(0.4,0,0.2,1) infinite"
              }}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <svg
              className="w-8 h-8 text-white -mt-2"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 8L12 18L20 8"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

          </div>

          <div className="h-8 w-[2px] bg-white/50"></div>

          <span className="text-white text-sm font-semibold tracking-wide max-md:text-sm">
            Download App Now
          </span>

        </div>
      </a>
    </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="mt-3  flex justify-center relative ">

      {/* GLOW */}
      <div className="absolute w-[350px] h-[350px] bg-yellow-500/20 blur-[120px] rounded-full"></div>

      <img
        src="/main7.png"
        alt="MyBet Model"
        className="relative w-[260px] md:w-[340px] lg:w-[380px]"
      />

    </div>

  </div>

  {/* PAYMENT LOGOS */}


</div>


);
};

export default BannerSection;

