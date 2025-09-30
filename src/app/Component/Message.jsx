import Image from "next/image";
import copy from '../../../assets/copy.png'
import pencile from '../../../assets/pen.png'
import regenerate from '../../../assets/eco.png'
import  like from '../../../assets/like.png'
import dislike from '../../../assets/dislike.png';
import logosmall from '../../../assets/logo_smalll.png'
function Message({role,content}){
    return (
        <div className="flex flex-col items-center w-full max-w-3xl text-sm">
          <div className={`flex flex-col w-full mb-8 ${role === 'user' && 'items-end' }`}>
            <div className={`group relative flex max-w-2xl py-3  rounded-xl  ${role === 'user' ? 'bg-[#414158] px-5' : 'gap-3' } `}> 
              <div className={`opacity-0 group-hover:opacity-100 absolute ${ role === 'user' ? '-left-16 top-2.5' : 'left-9 -bottom-6'} transition-all`} > 
                <div className="flex  items-center gap-2 opacity-70">
                 {
                    role === 'user' ? (
                        <>
                        <Image src={copy} alt="image" className="w-4 cursor-pointer"/>
                        <Image src={pencile} alt="image" className="w-4 cursor-pointer" />
                        </>
                    ):(
                        <>
                          <Image src={copy} alt="icons" className="w-4 cursor-pointer"/>
                          <Image src={regenerate} alt="icons" className="w-4 cursor-pointer"/>
                          <Image src={like} alt="icons" className="w-4 cursor-pointer"/>
                          <Image src={dislike} alt="icons" className="w-4 cursor-pointer"/>
                        </>
                    )
                 }
                </div>
              </div>
              {
                role === 'user' ?
                (
                  <span className="text-white/90">{content}</span>
                ):
                (
                    <>
                    <Image src={logosmall} alt="image" className="h-9 w-9 p-1 border border-white/15 rounded-full"/>
                    <div className="space-y-4 w-full overflow-scroll">
                        {content}
                    </div>
                    </>
                )
              }
            </div>
          </div>
        </div>
    )
}

export default Message;