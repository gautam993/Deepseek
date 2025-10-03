import Image from "next/image";
import Logo_text from "../assets/logo_text.svg";
import logo_icon from "../assets/logo_icon.svg";
import meun_icon from "../assets/menu_icon.svg";
import sidebar_close_icon from '../assets/sidebar_close_icon.svg';
import sidebar_icon from '../assets/sidebar_icon.svg'
import chat_icon from "../assets/chat_icon.svg";
import chat_icon_dull from "../assets/chat_icon_dull.svg";
import phone_icon from '../assets/phone_icon.svg';
import phone_icon_dull from '../assets/phone_icon_dull.svg';
import barcode from '../assets/qrcode.png';
import new_icon from "../assets/new_icon.svg";
import profile_icon from "../assets/profile_icon.svg";
import { useClerk, UserButton } from "@clerk/nextjs";
import { useAppcontext } from "@/context/Appcontext";
import ChatLabel from "./ChatLabel";
import { useState } from "react";






function Sidebar({expand,setexpand}){
 

   const {openSignIn} = useClerk();
   const {user}  = useAppcontext();
   const [openmenu,setopenmenu] = useState({id:0,open : false,})

    return (
           <div className={`flex flex-col justify-between bg-[#212327] pt-7 transition-all z-50 max-md:absolute max-md:h-screen ${expand ? "p-4 w-64" : "md:w-20 w-0 max-md:overflow-hidden"}`}>
  <div> 
       <div className={`flex ${expand ? "flex-row gap-10" : "flex-col items-center gap-8"}`}>
      <Image className={expand ? "w-36" : "w-10"} src={expand ? Logo_text : logo_icon} alt="image"/>

      <div onClick={() => setexpand(!expand)}className="group relative flex items-center justify-center hover:bg-gray-500/20 transition-all duration-300 h-9 w-9 aspect-square rounded-lg cursor-pointer">
        <Image src={meun_icon} alt="image" className="md:hidden" />
        <Image src={expand ? sidebar_close_icon : sidebar_icon} alt="image" className="hidden md:block w-7"/>


        <div className="absolute w-max -top-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none">
          {expand ? "Close Sidebar" : "Open Sidebar"}
          <div className="w-3 h-3 absolute bg-black rotate-45 left-1/2 -bottom-1.5 -translate-x-1/2"></div>
        </div>
      </div>
    </div>

    <div className={`mt-8 flex  justify-center ${expand ? "flex-col" : ""}`}>
      <button className={`flex items-center justify-center cursor-pointer ${expand ? "bg-primary hover:opacity-90 rounded-2xl gap-2 p-2.5 w-full": "group relative h-9 w-9 mx-auto hover:bg-gray-500/30 rounded-lg" }`}>
        <Image  src={expand ? chat_icon : chat_icon_dull}  alt="image"className={expand ? "w-6" : "w-7"}/>

        {
        !expand &&
         (
          <div className="absolute w-max -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none">
            New Chat
            <div className="w-3 h-3 absolute bg-black rotate-45 left-1/2 -bottom-1.5 -translate-x-1/2"></div>
          </div>
        )
        }

        {expand && <p className="text-white font-medium">New Chat</p>}
      </button>
      <div className={`mt-8 text-white/25 text-sm ${expand ? "block" : "hidden"}`}>
        <p className="my-1">Recent</p>
         <ChatLabel openmeun={openmenu} setopenmenu={setopenmenu} />
      </div>
    </div>
  </div>

<div>
    <div className={`flex items-center cursor-pointer  group relative ${expand ? "gap-1 text-white/80 text-sm p-2.5 border border-primary rounded-lg hover:bg-white/10 cursor-pointer" : "h-10 w-10 mx-auto hover:bg-gray-500/30 rounded-lg"}`}>
      <Image className={expand ? "w-6" : "w-6.5 mx-auto"} src={expand ? phone_icon : phone_icon_dull } alt="image"/>
    <div className={`absolute -top-60  pb-8 ${ !expand && "-right-40"} opacity-0 group-hover:opacity-100 hidden  group-hover:block transition`}>
        <div className="relative w-max bg-black text-white text-sm p-3 rounded-lg shadow-lg">
          <Image src={barcode} alt="image" className="w-44"/>
          <p>Scan to get DeepSeek App</p>
         <div className={`w-3 h-3  absolute bg-black rotate-45 ${expand ? "right-1/2" : "left-4"} -bottom-1.5 `}></div>
      </div>
    </div>
    {
        expand && <><span>Get App</span> <Image src={new_icon} alt=" image"/></>
    }
    </div>
     <div onClick={ user ? null :  openSignIn } className={`flex items-center gap-3 ${expand ? "hover:bg-white/10 rounded-lg" : "justify-center w-full"} text-white/60 text-sm p-2 mt-2 cursor-pointer`}>
     
      {
        user ? <UserButton/> :  <Image src={profile_icon} alt="image" className="w-7"/>
      }
     
     
      {
        expand &&  <span>My Profile</span>
      }
     </div>
</div>


</div>
    )
}

export default Sidebar;







