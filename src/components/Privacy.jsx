"use client";

import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {

const navigate = useNavigate();

return (

<div className="bg-[#00000] text-white min-h-screen">

{/* HEADER */}
<div className="border-b border-white/10 bg-black sticky top-0 z-50">

<div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
<Link to="/">
    <img src="/mybet.png" alt="logo" className="w-14 h-12 cursor-pointer" />
  </Link>
<button
onClick={()=>navigate(-1)}
className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold"
>
← Back
</button>



</div>

</div>


{/* CONTENT */}
<div className="max-w-5xl mx-auto px-6 py-5 space-y-6 text-center">

<h1 className="text-4xl font-bold text-yellow-400">
Privacy Policy – MyBet Satta Matka App
</h1>

<p className="text-gray-300 leading-relaxed text-lg">
At MyBet, Satta Matka App we respect and protect the privacy of our users. This Privacy Policy explains how we collect, use, store, and safeguard your information when you use our Satta Matka application and related services. By accessing or using MyBet, you agree to the practices described in this policy.
</p>


{/* SECTION 1 */}
<div>

<h2 className="text-2xl font-semibold text-yellow-400 mb-4 ">
1. Information We Collect
</h2>

<p className="text-gray-300 mb-4">
When you use MyBet, we may collect the following types of information:
</p>

<p className="font-semibold">Personal Information</p>

<ul className="list-disc ml-6 text-gray-300 space-y-1 list-none pl-0">
<li>Name</li>
<li>Mobile number</li>
<li>Email address</li>
<li>Account details provided during registration</li>
</ul>

<p className="font-semibold mt-6">Technical Information</p>

<ul className="list-disc ml-6 text-gray-300 space-y-1 list-none pl-0">
<li>Device information</li>
<li>IP address</li>
<li>App usage data</li>
<li>Login activity and preferences</li>
</ul>

<p className="font-semibold mt-6">Usage Information</p>

<ul className="list-disc ml-6 text-gray-300 space-y-1 list-none pl-0">
<li>Market preferences</li>
<li>App interaction and activity history</li>
</ul>

</div>


{/* SECTION 2 */}
<div>

<h2 className="text-2xl font-semibold text-yellow-400 mb-4">
2. How We Use Your Information
</h2>

<p className="text-gray-300 mb-4">
We use collected information to:
</p>

<ul className="list-disc ml-6 text-gray-300 space-y-2 list-none pl-0">
<li>Provide Satta Matka market updates and services</li>
<li>Improve app performance and user experience</li>
<li>Deliver AI-based predictions and analysis reports</li>
<li>Send important notifications, updates, or promotional information</li>
<li>Maintain platform security and prevent misuse</li>
</ul>

</div>


{/* SECTION 3 */}
<div>

<h2 className="text-2xl font-semibold text-yellow-400 mb-4">
3. Data Protection & Security
</h2>

<p className="text-gray-300">
MyBet uses reasonable technical and administrative security measures to protect user data against unauthorized access, loss, or misuse. We continuously work to maintain a secure environment for all users.
</p>

</div>


{/* SECTION 4 */}
<div>

<h2 className="text-2xl font-semibold text-yellow-400 mb-4">
4. Sharing of Information
</h2>

<p className="text-gray-300 mb-4">
We do not sell, rent, or trade your personal information to third parties. Information may only be shared:
</p>

<ul className="list-disc ml-6 text-gray-300 space-y-2 list-none pl-0">
<li>When required by law or legal authorities</li>
<li>To protect platform security or user safety</li>
<li>With trusted service providers assisting in app operations (under confidentiality obligations)</li>
</ul>

</div>


{/* SECTION 5 */}
<div>

<h2 className="text-2xl font-semibold text-yellow-400 mb-4">
5. Cookies & Tracking Technologies
</h2>

<p className="text-gray-300">
MyBet may use cookies or similar technologies to enhance user experience, remember preferences, and analyze app performance. Users can manage cookie settings through their device preferences.
</p>

</div>


{/* SECTION 6 */}
<div>

<h2 className="text-2xl font-semibold text-yellow-400 mb-4">
6. Third-Party Links
</h2>

<p className="text-gray-300">
Our application may contain links to third-party websites or services. MyBet is not responsible for the privacy practices or content of external platforms.
</p>

</div>


{/* SECTION 7 */}
<div>

<h2 className="text-2xl font-semibold text-yellow-400 mb-4">
7. User Responsibility
</h2>

<p className="text-gray-300">
Users must ensure that all information provided is accurate. The platform is intended only for individuals 18 years or older. Users are responsible for complying with local laws regarding Satta Matka or gaming activities.
</p>

</div>


{/* SECTION 8 */}
<div>

<h2 className="text-2xl font-semibold text-yellow-400 mb-4">
8. Changes to Privacy Policy
</h2>

<p className="text-gray-300">
MyBet reserves the right to update or modify this Privacy Policy at any time. Updated versions will be posted within the application or website. Continued use of the platform indicates acceptance of the revised policy.
</p>

</div>


{/* SECTION 9 */}
<div>

<h2 className="text-2xl font-semibold text-yellow-400 mb-4">
9. Contact Us
</h2>

<p className="text-gray-300">
If you have any questions regarding this Privacy Policy, you may contact us through the official MyBet support channel available within the app.
</p>

</div>


{/* FOOTER */}
<div className="border-t border-white/10 pt-8 text-center">

<p className="text-yellow-400 font-semibold">
MyBet Satta Matka App – Your privacy and trust are our priority.
</p>

</div>

</div>
<Footer/>

</div>

);
}