import React, {useEffect, useState} from 'react'
import {motion, spring} from 'framer-motion'
import { Icon } from '@iconify/react';

function Loading(props) {

    const [count, setCount] = useState(0);

    const delayedFunction = () => {
        props.setLoadingComplete()
      };
    
    useEffect(() => {
    const interval = setInterval(() => {
      
        setCount((prevCount) => (prevCount < 100 ? prevCount + 1 : prevCount));

        if (count === 100) {
          console.log('Count is now 100!');
        }
      }, 30);

      if (count === 100) {
        clearInterval(interval);
        setTimeout(delayedFunction, 5000);
      }

      return () => clearInterval(interval);
    }, [count]);

 
    
  return (
    
        <motion.div className="bg-black w-screen h-screen flex flex-col justify-center text-center items-center text-white text-8xl"  
        animate= {count===100?{scale:310 , x:1480}:{}} transition={{duration:2, delay:2.3, type:spring}}
         >
             
             <motion.div initial={{opacity:1}} > {count}% </motion.div> 
             {/* <motion.div className='relative w-[100px] h-[100px]' 
             style={{top:window.innerHeight/2.5 , left:window.innerWidth/2.1}}
             initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{duration:0.5, delay:3.8}} >
              <motion.div className='absolute' animate={{rotate:[20,30,20]}} transition={{ ease: "linear", duration: 0.5, repeat: Infinity, delay: 4.6}}>
              <Icon className=" w-[70px] h-[70px]" icon="fluent-emoji-flat:waving-hand-light" 
               />
               </motion.div>
             </motion.div> */}
        </motion.div>
  
  )
}

export default Loading