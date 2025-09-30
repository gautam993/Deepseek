'use client'
import Image from "next/image";
import { useState } from "react";
import menu from '../../assets/menu.png';
import chat from '../../assets/messenger.png';
import Logo from '../../assets/logo_smalll.png' 
import Sidebar from "./Component/Sidebar";
import PromptBox from "./Component/Promptbox";
import Message from "./Component/Message";
// test changem

export default function Home() {
  const [expand,setexpand] = useState(false)
  const [messages,setmessage] = useState([])
  const [isloading,setloading] = useState(false)
  return (
     <div>
      <div className="flex h-screen">
        <Sidebar expand={expand} setexpand={setexpand}/>
        <div className="flex-1 flex flex-col items-center justify-center px-4 pb-8 bg-[#292a2d] text-white relative">
          <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
            <Image onClick={()=>(expand ? setexpand(false): setexpand(true))} className="rotate-180 w-[25px]" src={menu} alt="menu"  />
            <Image className="opacity-70 w-[25px]" src={chat} alt="menu" />

          </div>

          {
            messages.length == 0 ? (
              <>
              <div className="flex items-center gap-3">
                <Image src={Logo} alt="logo"/>
                <p className="text-2xl font-medium">Hi,I am DeepSeek.</p>
              </div>
              <p className="text-sm mt-2">How,Can I Help You Today</p>
              </>
            ):(
            <div>
              <Message role='user' content='what is next js'/>
            </div>
          )
          }
          {/* prompt box */}
          <PromptBox isloading={isloading} setloading={setloading} />
          <p className="text-xs absolute bottom-1 text-gray-500" >AI Generated, for reference Only</p>
        </div>
      </div>
     </div>
  );
}
