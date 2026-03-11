"use client";

export default function Logo() {

const logos = [
"https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/500px-Paytm_Logo_%28standalone%29.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg",
"https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg",
"https://cashfreelogo.cashfree.com/website/landings/homepage/cashfree10Logo.svg",
"https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RuPay.svg/500px-RuPay.svg.png"
];

return (

<section className="relative overflow-hidden py-14 bg-gradient-to-b from-[#020617] via-[#020617] to-[#020c24] max-md:py-5">
{/* TITLE */}
<div className="text-center mb-6">

<h2 className="text-white text-xl md:text-2xl font-bold tracking-wide">
Trusted Payment Partner
</h2>

<div className="h-[3px] w-40 mx-auto mt-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-transparent rounded-full"></div>

<p className="text-gray-400 text-sm mt-3">
Secure Payments Powered by Leading Partners
</p>

</div>

{/* LOGO MARQUEE */}

<div className="relative w-full overflow-hidden">

<div className="flex items-center marquee-track">

{[...logos,...logos].map((logo,index)=>(

<div
key={index}
className="flex items-center justify-center mx-6 shrink-0 max-md:mx-3"
>

{/* CARD */}

<div
className="flex items-center justify-center
h-16 w-36
rounded-lg
bg-white
border border-white/10
shadow-lg
transition duration-300
hover:border-yellow-400/40
hover:shadow-yellow-500/20
hover:scale-110
max-md:w-24 max-md:h-[3rem]"
>

<img
src={logo}
className="h-8 w-auto opacity-90 hover:opacity-100 transition px-3 max-md:h-6"
/>

</div>

</div>

))}

</div>

</div>

<style>{`
.marquee-track{
display:flex;
width:max-content;
animation: marquee 22s linear infinite;
}

@keyframes marquee{
0%{
transform: translateX(0);
}
100%{
transform: translateX(-50%);
}
}
`}</style>

</section>

);
}