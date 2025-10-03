'use client'
import { useState } from "react";
import Image from "next/image";
import chat from "../assets/chat_icon.svg";
import logo_icon from '../assets/logo_icon.svg'
import menu from "../assets/menu_icon.svg"
import Sidebar from "@/compoents/Sidebar";
import PromptInput from "@/compoents/PromptInput";
import Messsage from "@/compoents/Message";

export default function Home() {
   
  const [expand,setexpand] = useState(false);
  const [mesages,setmesages] = useState([]);
  const [loading,setloading] = useState(false)


  return (
    <div>
      <div className="flex h-screen">
         <Sidebar expand={expand} setexpand={setexpand} />
         <div className="flex-1 flex flex-col items-center justify-center PX-4 pb-8 bg-[#292a2d] text-white relative]">
          <div className="md:hidden absolute px-4 top-6 flex items-center justify-between  w-full">
            <Image onClick={()=>(expand ? setexpand(false) : setexpand(true))} className="rotate-180" src={menu} alt="image"/>
            <Image className="opacity-70" src={chat} alt="images"/>
          </div>

         {
          mesages.length === 0 ?
          (
          <>
            <div className="flex items-center gap-3">
              <Image src={logo_icon} alt="image" className="h-16"/>
              <p className="text-2xl font-medium" >Hi, I am DeepSeek.</p>
            </div>
            <p className="text-sm mt-2">How can I help you Today</p>
          </>
        )
        :
        (
          <div>
            <Messsage role="user" content="hey there"/>
          </div>
        )
         }
          <PromptInput isloading={loading} setloading={setloading}/>
          <p className="text-xs absolute bottom-1 text-gray-500" >AI-generated, for refernce only</p>
         </div>
      </div>
    </div>
  );
}



