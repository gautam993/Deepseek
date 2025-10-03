import Image from "next/image";
import dots from "../assets/three_dots.svg";
import pencil from '../assets/pencil_icon.svg';
import delete_icon from "../assets/delete_icon.svg"


function ChatLabel({openmeun,setopenmenu}){
    return (
        <div className="flex itema-center justify-between p-2 text-white/80 hover:bg-white/10 rounded-lg text-sm group cursor-pointer">
           <p className="group-hover:max-w-5/6 truncate" >Chat Name here</p>
           <div  className="group relative flex items-center justify-center h-6 w-6 aspect-square hover:bg-black/80 rouned-lg">
            <Image  src={dots} alt="image" className={`w-4 ${openmeun.open ? "" : "hidden"}  group-hover:block`}/>
            <div className={`absolute ${openmeun.open ? "block" : "hidden"} -right-36 top-6 bg-gray-700 rouned-xl w-max p-2`}>
                <div className="flex items-center gap-3 hover:bg-white/10 px-3 py-2 rounded-lg">
                    <Image src={pencil} alt="image" className="w-4 "/>
                    <p className="">Rename</p>
                </div>
                <div className="flex items-center gap-3 hover:bg-white/10 px-3 py-2 rounded-lg">
                    <Image src={delete_icon} alt="" className="w-4"/>
                     <p>Delete</p>
                </div>
            </div>
           </div>
        </div>
    )
}

export default ChatLabel;