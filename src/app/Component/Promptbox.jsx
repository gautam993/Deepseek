import Image from "next/image";
import Deeplearning from "../../../assets/deep-learning.png"
import globalsearch from "../../../assets/global-search.png"
import paperpin from "../../../assets/paperpin.png"
import uparrow from "../../../assets/uparrow.png"
import uparrowdull from '../../../assets/uparrowdull.png'
import { useState } from "react";
function PromptBox({isloading,setloading}){
  const [prompt,setprompt] = useState("");
    return (
       <form className={`w-full ${false ? "max-w-3xl" : "max-w-2xl"} bg-[#404045] p-4 rounded-3xl mt-4 transition-all`}>
         <textarea onChange={(e)=>setprompt(e.target.value)} value={prompt} className="outline-none w-full resize-none overflow-hidden break-words bg-transparet" rows={2} placeholder="Message DeepSeek" required/>
         <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
                <p className="flex items-center gap-2 text-sm border border-gray-300/40 px-2 py-1  rounded-full cursor-pointer hover:bg-gray-500/20 transition"> 
                  <Image  className="w-6" src={Deeplearning} alt="image"/>
                  DeepThink
                </p>
                <p className="flex items-center gap-2 text-sm border border-gray-300/40 px-2 py-1  rounded-full cursor-pointer hover:bg-gray-500/20 transition"> 
                  <Image  className="w-6" src={globalsearch} alt="image"/>
                  Search
                </p>
            </div>
            <div className="flex items-center gap-2">
              <Image className="w-4 cursor-pointer" src={paperpin} alt="image"/>
              <button className={`${prompt ? "bg-primary" : "bg-[#71717a]"} rounded-full p-2 cursor-pointer`} >
                  <Image className="w-3.5 aspect-square" src={prompt ?  uparrow : uparrowdull} alt="button"/>
              </button>
            </div>
         </div>
       </form>
    )
}

export default PromptBox;