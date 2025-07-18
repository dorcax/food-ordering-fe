import { motion, useAnimation, useInView } from 'motion/react'
import { type ReactNode, useEffect, useRef } from 'react'

const Reveal = ({children}:{children:ReactNode}) => {
    const ref=useRef(null)
    const isInView =useInView(ref,{once:true})
    const mainControls =useAnimation()
    useEffect(()=>{
if(isInView){
  mainControls.start("visible")
}
    },[isInView])
  return (
   <div  ref={ref}>
     <motion.div variants={{
       hidden:{opacity:0, y:75},
       visible:{opacity:1,y:0}
    }}
         initial="hidden"
         animate={mainControls}
         transition={{duration:0.5,delay:0.25}}
    
    >
        {children}
    </motion.div>
   </div>
  )
}

export default Reveal