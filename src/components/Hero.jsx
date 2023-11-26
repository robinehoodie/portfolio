import React, {useState } from 'react'
import { motion} from 'framer-motion'
import Typed from 'react-typed';
import pic1 from '../image/heropic1.jpg'
import pic2 from '../image/heropic2.jpg'
import MoveLetters from './sub/MoveLetters';
import { useSpring, a} from 'react-spring';

function Hero(props) {
  const [flipped, set] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },

  });

  const isTablet = window.innerWidth < 1024;

  return (
    <motion.div className="w-full h-screen lg:flex md:flex-row"
    style={{boxShadow: props.darkMode?props.doAnimate? "0 25px 50px -12px rgba(255, 255, 255, 0.25)":"":
    props.doAnimate?"0 25px 50px -12px rgba(0, 0, 0, 0.25)":""}}
    ref={props.containerRef} 
    animate={props.doAnimate ? 'animate' : ''}
    variants={props.Pagevariants}>

      <motion.div className='lg:w-1/2 lg:mt-[-10%] lg:my-0 my-[20%] md:w-full flex flex-col justify-center items-center text-center '>
      <motion.p className='lg:text-3xl text-xl pb-3 flex-row flex' initial={{x:-600}} animate={{x:0}}  transition={{type:'spring', delay:props.firstOpen?1.6: 0, duration:1 }} >
      <MoveLetters word="Hello,"/>
      &nbsp;
      <MoveLetters word="I"/> &nbsp;
      <MoveLetters word="am"/></motion.p >
     
      <motion.div className=" w-fit lg:text-5xl xl:text-7xl  lg:ml-[-30px] text-5xl pb-3 relative" style={{ display: 'flex', flexDirection: 'column' }}initial={{opacity:1}}>
        
        <motion.div className="absolute" initial={{opacity:1}} animate={{opacity:0}} transition={{delay:props.firstOpen?5.3: 3.2}}>
        <Typed strings= {["ROBINE"]} typeSpeed={60} startDelay={props.firstOpen?2300: 200} showCursor={false} />
        </motion.div>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:props.firstOpen?5.2: 3.1}} >
          <MoveLetters word="ROBINE"/>
        </motion.div>
      </motion.div>
      
      <motion.div className=" w-fit lg:text-5xl xl:text-7xl lg:ml-[100px] text-5xl pb-3 relative" style={{ display: 'flex', flexDirection: 'column' }}initial={{opacity:1}}>
        
        <motion.div className="absolute" initial={{opacity:1}} animate={{opacity:0}} transition={{delay:props.firstOpen?5.1: 3}}>
        <Typed strings= {["COLE"]} typeSpeed={60} startDelay={props.firstOpen?2700: 600} showCursor={false} />
        </motion.div>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:props.firstOpen?5: 2.9}} >
          <MoveLetters word="COLE"/>
        </motion.div>
      </motion.div>
      
      <motion.div className=" w-fit lg:text-5xl xl:text-7xl lg:ml-[293px] text-5xl pb-3 relative" style={{ display: 'flex', flexDirection: 'column' }}initial={{opacity:1}}>
        
        <motion.div className="absolute" initial={{opacity:1}} animate={{opacity:0}} transition={{delay:props.firstOpen?6.5: 4.5}}>
        <Typed strings= {["JUMALON"]} typeSpeed={60} startDelay={props.firstOpen?3000: 900} showCursor={false} />
        </motion.div>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:props.firstOpen?6.4: 4.4}} >
          <MoveLetters word="JUMALON"/>
        </motion.div>
      </motion.div>
      </motion.div>

      <motion.div className={`md:w-full lg:w-1/2 lg:h-3/4 lg:pt-16  
      justify-center  ${isTablet? "-mt-16" : ""} items-center text-center flex flex-col`} >
     
      <motion.div className="lg:w-[400px] lg:h-[500px] w-[200px] h-[300px] flex relative cursor-none " onClick={() => set(state => !state)} 
      initial={{scale:0, x:600}}
      animate = {{scale:1, x:0}}
      transition={{type:"just"}}
      onMouseEnter={props.heroImageEnter}
      onMouseLeave={props.heroImageLeave}
      >
      <a.div
        className={`w-full h-full absolute`}
        style={{ backgroundImage: `url(${pic1})`, backgroundSize: 'cover',backgroundPositionX:"56%",
          opacity: opacity.to(o => 1 - o), transform }}
      />
      <a.div
        className={`w-full h-full absolute`}
        style={{
          backgroundImage: `url(${pic2})`, backgroundSize: 'cover',backgroundPositionX:"56%",
          opacity,
          transform,
          
        }}
      />
    </motion.div>
      
      
      
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay: props.firstOpen?3.3: 0.9}}>
        <Typed className="lg:text-5xl xl:text-7xl text-5xl" strings = {["Designer","Developer"]}  typeSpeed={120} backSpeed={120} smartBackspace={true} loop />
      </motion.div>
      
      </motion.div>
      
    </motion.div>
  )
}

export default Hero