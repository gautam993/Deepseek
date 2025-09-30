import Image from "next/image";
import dots from "../../../assets/dots.png";
import pen from '../../../assets/pen.png';
import Delete from '../../../assets/delete.png'
import { useState } from "react";



function Chatlabel({openmenu,setopenmenu}){

    return (
        <div className="flex items-center justify-between p-2 text-white/80 hover:bg-white/10 rounded-lg text-sm group cursor-pointer">
          <p className="group-hover:max-w-5/6 truncate">Chat Name here</p>
           <div className="group relative flex items-center  justify-center h-6 w-6 aspect-square hover:bg-black/80 rounded-lg">
            <Image src={dots} alt="image" className={`w-4 ${openmenu.open ? '' : "hidden"} group-hover:block`}/>
            <div className={`absolute  ${ openmenu.open ? 'block' : "hidden"} -right-36 top-6 bg-gray-700 rounded-xl w-max p-2`} > 
                <div className="flex items-center gap-3 hover:bg-white/10 px-3 py-2 rounded-lg">
                    <Image src={pen} alt="image" className="w-4"/>
                    <p>Rename</p>
                </div>
                <div className="flex items-center gap-3 hover:bg-white/10 px-3 py-2 rounded-lg">
                    <Image src={Delete} alt="image" className="w-4"/>
                    <p>Delete</p>
                </div>
            </div>
           </div>
        </div>
    )
}

export default Chatlabel;