import React from 'react'
import { motion} from 'framer-motion';
import { Icon } from '@iconify/react';

function Footer(props) {

  const handleClick = (num) => {
    
    props.setDoAnimate(true)
    props.setFirstOpen(false)
    setTimeout(() => {
      switch(num){
        case 0 : props.setPage("contact"); break;
        case 1 : props.setPage("skills"); break;
        case 2 : props.setPage("work"); break;
        case 3 : props.setPage("about"); break;
      }
      props.setDoAnimate(false)
    }, 2000);
    
  };

  const isTablet = window.innerWidth < 1024;
  
  return (
    <motion.div className='flex justify-center h-1/2 w-full' >
        <motion.div className="bg-transparent  text-center fixed bottom-0 w-1/4 cursor-pointer " 
        initial={{y:110}} animate={props.menuAppear} exit={props.menuExit}
        onClick={props.menuClicked}>
        <p className={`absolute  ${isTablet? "text-xl top-7 left-[39%]":"text-2xl top-10 left-52"} z-10 text-white`}> Hide </p>
        <svg viewBox={isTablet? "0 0 128 50":"0 0 130 30"} className='relative '>
          <motion.path
            d="M129 60C129 93.1371 100.122 120 64.5 120C28.8776 120 0 93.1371 0 60C0 26.8629 28.8776 0 64.5 0C100.122 0 129 26.8629 129 60Z"
            fill="#8D8D8D"  animate={props.svgControls}
          />
          
        </svg>
          
        </motion.div>
        <motion.div className='lg:h-[5rem] lg:w-[5rem] w-[3.5rem] h-[3.5rem] fixed bottom-0 rounded-full items-center profile' style={{backgroundColor: '#8D8D8D', zIndex: props.isMenuClick?-2:0}} 
        initial={{y:0, x:0, opacity:0}} 
        animate={isTablet?{x:props.isMenuClick? 0:120 , y:props.isMenuClick? 0:-50, opacity:props.isMenuClick? 0:1}:{x:props.isMenuClick? 0:180 , y:props.isMenuClick? 0:-100, opacity:props.isMenuClick? 0:1}}
        transition={{delay:props.isMenuClick?0:1.1, type:"spring", duration:0.5}} onClick={props.Page==="contact"?() => {}:()=>handleClick(0)}>
        <div><Icon className="w-3/4 h-3/4 m-auto mt-2 " icon="tabler:mail" color="white"/></div>  <span className='name'> Contact </span>
        </motion.div>

        <motion.div className='lg:h-[5rem] lg:w-[5rem] w-[3.5rem] h-[3.5rem] fixed  bottom-0 rounded-full items-center profile' style={{backgroundColor: '#8D8D8D', zIndex: props.isMenuClick?-2:0 }} 
        initial={{y:0, x:0, opacity:0}} 
        animate={isTablet?{x:props.isMenuClick? 0:40 , y:props.isMenuClick? 0:-100, opacity:props.isMenuClick? 0:1}:{x:props.isMenuClick? 0:60 , y:props.isMenuClick? 0:-150, opacity:props.isMenuClick? 0:1} }
        transition={{delay:props.isMenuClick?0:1.1, type:"spring", duration:0.5}} onClick={props.Page==="skills"?() => {}:()=>handleClick(1)}>
        <div><Icon className="w-3/4 h-3/4 m-auto mt-2" icon="la:wrench" color="white"/></div>  <span className='name'> Skills </span>
        </motion.div>

        <motion.div className='lg:h-[5rem] lg:w-[5rem] w-[3.5rem] h-[3.5rem]  fixed bottom-0 rounded-full items-center profile' style={{backgroundColor: '#8D8D8D', zIndex: props.isMenuClick? -2:0}} 
        initial={{y:0, x:0, opacity:0}} 
        animate={isTablet?{x:props.isMenuClick? 0:-50 , y:props.isMenuClick? 0:-100, opacity:props.isMenuClick? 0:1}:{x:props.isMenuClick? 0:-80 , y:props.isMenuClick? 0:-150, opacity:props.isMenuClick? 0:1}}
        transition={{delay:props.isMenuClick?0:1.1, type:"spring", duration:0.5}} onClick={props.Page==="work"?() => {}:()=>handleClick(2)}>
        <div><Icon className="w-3/4 h-3/4 m-auto mt-2" icon="lucide:code-2" color="white" /></div> <span className='name'> Works </span>
        </motion.div>
        
        <motion.div className='lg:h-[5rem] lg:w-[5rem] w-[3.5rem] h-[3.5rem] fixed  bottom-0 rounded-full items-center profile' style={{backgroundColor: '#8D8D8D', zIndex: props.isMenuClick?-2:0}} 
        initial={{y:0, x:0, opacity:0}} 
        animate={isTablet?{x:props.isMenuClick? 0:-120 , y:props.isMenuClick? 0:-50, opacity:props.isMenuClick? 0:1}:{x:props.isMenuClick? 0:-200 , y:props.isMenuClick? 0:-100, opacity:props.isMenuClick? 0:1}}
        transition={{delay:props.isMenuClick?0:1.1, type:"spring", duration:0.5}} onClick={props.Page==="about"?() => {}:()=>handleClick(3)}>
        <div><Icon className="w-3/4 h-3/4 m-auto mt-2" icon="line-md:person" color="white" /></div>  <span className='name'> About </span>
        </motion.div>
    </motion.div>
  )
}

export default Footer