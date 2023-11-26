import React, {useEffect} from 'react'
import background from 'C:/Users/robin/OneDrive/Desktop/Personal Project/personal/src/image/background.png';
import { motion } from 'framer-motion'


function Background(props) {

const hiddenMask = `linear-gradient(235deg , rgba(0,0,0,0) 0px, rgba(0,0,0,0) 3000px, rgba(0,0,0,1) 3000px, rgba(0,0,0,1) 3000px)`;
const visibleMask = `linear-gradient(235deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 3000px)`;

  return (
    <div >
    <motion.div  className='absolute h-screen w-screen -z-50 top-0' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover'}} initial={{opacity:0, x:-5000}} animate={
        props.darkMode
          ? { WebkitMaskImage: visibleMask, maskImage: visibleMask, opacity:1, x:0}
          : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask, opacity:1, x:0}
      } transition={
        { duration: 1.5}}/>
      {/* <motion.div className={`absolute bottom-0 justify-center text-center -z-50 flex w-full  p-10 select-none pointer-events-none`}>
        { props.darkMode && (
          <Typed className="text-3xl text-black" strings= {["Loading . . ."]} typeSpeed={60} startDelay={500} showCursor={false} />
        )}
        { !props.darkMode && (
          <Typed className="text-3xl text-white" strings= {["Loading . . ."]} typeSpeed={60} startDelay={500} showCursor={false} />
        )} */}
          {/* <motion.div 
            initial={{opacity:0}}
            animate={
              props.darkMode
                ? {color: "black" , opacity:1}
                : {color: "white" , opacity:1}
            } transition={{delay: 0.5, type: "spring"}}
          className='w-1/4' >
              Loading...  
          </motion.div >   
          <motion.div  
              initial={{opacity:0}}
              animate={
              props.darkMode
                ? {color: "black" , opacity:1}
                : {color: "white" , opacity:1}
            } transition={{ delay: 1, type: "spring"}}
          className='w-1/4' >
              Loading...  
          </motion.div >  

          <motion.div
          initial={{opacity:0}} 
          animate={
              props.darkMode
                ? {color: "black" , opacity:1}
                : {color: "white" , opacity:1}
            } transition={{ delay: 1.5, type: "spring"}}
          
          className='w-1/4' >
              Loading...  
          </motion.div > 

          <motion.div 
          initial={{opacity:0}} 
          animate={
              props.darkMode
                ? {color: "black" , opacity:1}
                : {color: "white" , opacity:1}
            } transition={{ delay: 2, type: "spring"}}
          className='w-1/4'>
              Loading...  
          </motion.div >  */}
      {/* </motion.div >
     */}
    </div >
  )
}

export default Background