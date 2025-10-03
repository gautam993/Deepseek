import Image from "next/image";
import deepthink_icon from "../assets/deepthink_icon.svg";
import search from "../assets/search_icon.svg";
import pin from "../assets/pin_icon.svg";
import { useState } from "react";
import arrow from "../assets/arrow_icon.svg"
import arrow_dull from "../assets/arrow_icon_dull.svg"
function PromptInput({isloading , setloading}){
    const [prompt,setprompt] = useState("");
    return (
        <form className={`w-full ${false ? "max-w-3xl" : "max-w-2xl"} bg-[#404045] p-4 rounded-3xl mt-4 transition-all`}>
          <textarea value={prompt} onChange={(e)=>setprompt(e.target.value)} className="outline-none w-full resize-none overflow-hidden break-words bg-transparent"  rows={2} placeholder="Message DeepSeek" required />
          <div className="flex items-center  justify-between text-sm" >
            <div className="flex items-center gap-2 ">
                <p className="flex items-center gap-2 text-xs border border-gray-300/40 py-1 px-2  rounded-full cursor-pointer hover:bg-gray-500/20 transition">
                    <Image src={deepthink_icon} alt="image" className="h-5"/>
                    Deepthink
                </p>
                <p className="flex items-center gap-2 text-xs border border-gray-300/40 py-1 px-2 rounded-full cursor-pointer hover:bg-gray-500/20 transition ">
                    <Image src={search} alt="image" className="h-5" />
                    Search
                </p>
            </div>
            <div className="flex items-center gap-2">
                <Image className="w-4 cursor-pointer" src={pin} alt="image"/>
                <button className={`${prompt ? "bg-primary" : "bg-[#71717a]"} rounded-full p-2 cursor-pointer `}>
                    <Image className="w-3.5 aspext-square cursor-pointer" src={prompt ? arrow : arrow_dull } alt="image"/>
                </button>
            </div>
          </div>
        </form>
    )
}

export default PromptInput;