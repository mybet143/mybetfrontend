import { useState, useRef, useEffect } from "react";
import { FaTelegramPlane, FaWhatsapp} from "react-icons/fa";
import { HiChatAlt2 } from "react-icons/hi";

export default function SupportWidget(){

const [open,setOpen] = useState(false)
const popupRef = useRef(null)

/* ONLY ID / NUMBER STORE KARO */
const telegramId = "mybet_Team"
const whatsappNumber = "919690325764"

/* CLOSE ON OUTSIDE CLICK */

useEffect(()=>{

function handleClickOutside(event){
if(popupRef.current && !popupRef.current.contains(event.target)){
setOpen(false)
}
}

if(open){
document.addEventListener("mousedown",handleClickOutside)
}

return ()=>{
document.removeEventListener("mousedown",handleClickOutside)
}

},[open])

return(

<>

{/* FLOAT BUTTON */}

<button
onClick={()=>setOpen(!open)}
className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-full hover:scale-110 transition "
>
<HiChatAlt2 size={24}/>
</button>


{/* POPUP */}

{open && (

<div
ref={popupRef}
className="fixed bottom-20 right-6 bg-[#0f172a] border border-white/10 rounded-2xl  w-64 p-4 z-50"
>

<h3 className="text-white font-semibold mb-3 text-center">
Customer Support
</h3>


{/* TELEGRAM */}

<a
href={`https://t.me/${telegramId}`}
target="_blank"
rel="noopener noreferrer"
className="flex items-center gap-3 border border-blue-500/40 bg-blue-500/10 rounded-lg p-3 hover:bg-blue-500/20 transition mb-3"
>

<FaTelegramPlane className="text-blue-400" size={22}/>

<div className="flex flex-col">
<span className="text-white text-sm font-medium">
Telegram Support
</span>

<span className="text-gray-400 text-xs">
@{telegramId}
</span>
</div>

</a>


{/* WHATSAPP */}

<a
href={`https://wa.me/${whatsappNumber}?text=Hello%20MyBet%20Support`}
target="_blank"
rel="noopener noreferrer"
className="flex items-center gap-3 border border-green-500/40 bg-green-500/10 rounded-lg p-3 hover:bg-green-500/20 transition"
>

<FaWhatsapp className="text-green-400" size={22}/>

<div className="flex flex-col">
<span className="text-white text-sm font-medium">
WhatsApp Support
</span>

<span className="text-gray-400 text-xs">
+{whatsappNumber}
</span>
</div>

</a>

</div>

)}

</>

)

}