import Image from "next/image";
import logotext from '../../../assets/logowithtext.png'
import logo from '../../../assets/logo_smalll.png';
import menu from '../../../assets/menu.png';
import sidebar_close from '../../../assets/sidebar_close.png'
import Sidebar_icon from '../../../assets/sidebar.png';
import chat_icon from "../../../assets/chat.png";
import Newchat from "../../../assets/new-chat.png";
import phone from "../../../assets/telephone.png";
import barcode from '../../../assets/barcode.png';
import New from '../../../assets/new.png'
import profile from '../../../assets/user.png';
import { useClerk,UserButton } from "@clerk/nextjs";
import { useAppContext } from "../context/Appcontext";
import Chatlabel from "./Chatlabel";
import { useState } from "react";

function Sidebar({expand,setexpand}){
   
     const {openSignIn} = useClerk();
     const {user} = useAppContext();
     const [openmenu,setopenmenu] = useState({
        id:0,
        open:false,
     })
    
    

    return (
        <div className={`flex flex-col justify-between bg-[#212327] pt-7 transition-all z-50 max-md:absolute max-md:h-screen ${expand ? "p-4 w-64" : "md:w-20 w-0 max-md:overflow-hidden"}`}>
            <div>
                <div className={`flex ${expand ? "flex-row gap-10" : "flex-col items-center gap-8" }`}>
                    <Image src={expand? logotext: logo} alt="logo" className={expand ? "w-36" : "w-10"}/>
                    <div  onClick={()=>expand ?  setexpand(false) : setexpand(true)}   className="group relative flex items-center justify-center hover:bg-gray-500/20 transition-all duration-300 h-9 w-9 aspect-square rounded-lg cursor-pointer">
                         <Image src={menu} alt="logo" className="md:hidden w-[30] "/>
                         <Image src={expand ? sidebar_close : Sidebar_icon } alt="logo" className="hidden md:block w-7"/>
                         <div className={`absolute w-max ${expand ? "left-1/1 -translate-x-15 top-12" : "-top-12 left-0"} opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-event-none`}>
                            {
                                expand ? "Close SideBar" : "Open SideBar"
                            }
                            <div className={`w-3 h-3 absolute bg-black rotate-45 ${expand ? "left-1/2 -top-1.5 -translate-x-1/2" :  "left-4 -bottom-1.5"}`}></div>
                         </div>
                    </div>
                </div>
                <button className={`mt-8 flex items-center justify-center cursor-pointer ${expand ? "bg-primary hover:opacity-90 rounded-2xl gap-2 p-2.5 w-max" : "group relative h-9 w-9 mx-auto hover:bg-gray-500/30 rounded-lg" }`}>
                    <Image src={expand ?  chat_icon : Newchat } alt="button" className={expand ? "w-6" : "w-7"}/>
                    <div className="absolute w-max -top-12 -right-12 opacity-0 group:hover:opacity-100 transition bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none">
                        New Chat
                        <div className="w-3 h-3 absolute bg-black rotate-45 left-4 -bottom-1.5"></div>
                    </div>
                    {   
                        expand && <p className="text-white text font-medium" >New chat</p>
                    }
                </button>
                <div className={`mt-8 text-white/25 text-sm ${expand ? "block" : "hidden"}`}>
                    <p className="my-1 " >Recents</p>
                    {/* chat label */}
                    <Chatlabel openmenu={openmenu} setopenmenu={setopenmenu}/>
                </div>
            </div>         
            <div>
              <div className={`flex items-center cursor-pointer relative group ${expand ? "gap-1 text-white/80 text-sm p-2.5 border border-primary rounded-lg hover:bg-white/10": "h-10 w-10 mx-auto hover:bg-gray-500/30 rounded-lg"}`} >
                <Image className={expand ? "w-5" : "w-6 mx-auto"} src={phone}alt="profile"/>
                <div className={`absolute -top-60 pb-8 ${!expand && "-right-40"} opacity-0 invisible group-hover:opacity-100 group-hover:visible transition`}>
                  <div className="relative w-max bg-black text-white text-sm p-3 rounded-lg shadow-lg">
                    <Image src={barcode} alt="barcode" className="w-50" />
                    <p>scan to get DeepSeek App</p>
                    <div className={`w-3 h-3 absolute bg-black rotate-45 ${expand ? "right-1/2" : "left-4"} -bottom-1.5`}></div>
                  </div>
                </div>
                {expand && (<><span>Get App</span><Image src={New} alt="" className="w-10" /></>)}
                </div>
          
                <div  onClick={user ? null :openSignIn}  className={`flex items-center ${expand ? "hover:bg-white/10 rounded-lg" : "justify-center w-full"} gap-3 text-white/60 text-sm p-2 mt-2 cursor-pointer`}>
                {
                    user ?  <UserButton/> : <Image src={profile} alt="profile" className="w-7"/>
                }
                    
                    {
                        expand && <span>My profile</span>
                    }
                </div>
                
            </div>
        </div>
    )
}

export default Sidebar;





