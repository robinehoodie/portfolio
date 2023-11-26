import React from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react';
import MoveLetters from './sub/MoveLetters.jsx';


function Navbar(props) {

  const handleClick = () => {
    
    props.setDoAnimate(true)
    setTimeout(() => {
      props.setPage("hero")
      props.setDoAnimate(false)
    }, 2000);
    
  };

  return (
    <div className=' w-full flex justify-between p-4 items-center cursor-pointer'>
        <motion.div className='md:text-2xl text-s xl:pl-16 '  initial= {{y:-100}} 
        animate={{y:0}} transition={{delay:0.5, type:'spring', stiffness:200}} 
        onClick={() => handleClick()}
        onMouseEnter={props.heroEnter}
        onMouseLeave={props.heroLeave}> <p> R&nbsp;O&nbsp;B&nbsp;I&nbsp;N&nbsp;E </p> </motion.div>
        <motion.div className="switch lg:w-[90px] lg:h-[40px] " data-isOn={props.darkMode} onClick={props.toggleDarkMode} 
        initial= {{y:-100}} 
        animate={{y:0}} 
        transition={{delay:1.5, type:'spring', stiffness:200}}
        onMouseEnter={props.modeEnter}
        onMouseLeave={props.modeLeave}>
            
            <motion.div className={`handle lg:w-[30px] lg:h-[30px] items-center justify-center `} 
            initial={{opacity:1}} 
            animate={props.darkMode?{ backgroundColor: ['white', 'black'] , color:["#000", "#fff"] }: { backgroundColor: ['black', 'white'], color: ["#fff", "#000"]}} 
            layout 
            transition={props.isTablet?{spring, duration:1} :props.darkMode?{spring, delay: props.firstOpen? 0: 0.5, duration:1}: {spring, delay: props.firstOpen? 0: 0, duration:.5}}
            onClick={props.toggleDarkMode} 
            >
                <Icon onClick={props.toggleDarkMode} className="w-3/4 h-3/4 m-auto mt-1" icon={`${props.darkMode? "line-md:sunny-outline-to-moon-loop-transition": "line-md:moon-to-sunny-outline-loop-transition"}`}/>
            </motion.div>
        </motion.div>
        <motion.div className='md:text-2xl text-s xl:pr-16 cursor-pointer flex-row flex select-none' 
        initial= {{y:-100}} animate={{y:0}} transition={{delay:1, type:'spring', stiffness:200}} 
        onClick={props.menuClicked}
        onMouseEnter={props.menuEnter}
        onMouseLeave={props.menuLeave}> 
      
        <MoveLetters  word="M"/> &nbsp;
        <MoveLetters word="E"/> &nbsp;
        <MoveLetters word="N"/> &nbsp;
        <MoveLetters word="U"/> &nbsp;
       
        
        </motion.div>
        
    </div>
  )
}

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };
  
export default Navbar