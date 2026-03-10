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

<section className="relative overflow-hidden py-12 bg-[#020617] max-md:py-8">

{/* TITLE */}
<div className="text-center mb-10">

<h2 className="text-white text-2xl md:text-3xl font-semibold">
Trusted Payment Partner
</h2>

<div className="h-[3px] w-32 mx-auto mt-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-transparent rounded-full"></div>

</div>

{/* LOGO MARQUEE */}

<div className="relative w-full overflow-hidden">

<div className="flex items-center marquee-track">

{[...logos,...logos].map((logo,index)=>(

<div
key={index}
className="flex items-center justify-center mx-10 shrink-0 max-md:mx-4"
>

{/* DARK CARD */}

<div className="flex items-center justify-center
h-20 w-40
rounded-xl
bg-[#eeeeee]
border border-black/75
shadow-md
transition duration-300
hover:border-yellow-400/40
hover:shadow-yellow-500/20
hover:scale-105 max-md:w-25 max-md:h-[4rem]">

<img
src={logo}
className="h-10 w-auto opacity-80 hover:opacity-100 transition px-2 max-md:h-8"
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
animation: marquee 20s linear infinite;
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














