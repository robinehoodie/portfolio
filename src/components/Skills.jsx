import React, {useEffect} from 'react'
import { motion, useAnimation} from "framer-motion";
import MatterCircles from './sub/Circle';

function Skills(props) {
  // const draw = {
  //   hidden: { pathLength: 0, opacity: 0 },
  //   visible: (i) => {
  //     const delay = 1 + i * 0.5;
  //     return {
  //       pathLength: 1,
  //       opacity: 1,
  //       transition: {
  //         pathLength: { delay, type: "spring", duration: 3, bounce: 0 },
  //         opacity: { delay, duration: 0.01 }
  //       }
  //     };
  //   }
  // };
  

  return (
    <motion.div className=' w-full h-screen flex flex-col justify-center items-center '
    style={{boxShadow: "4px 4px 5px -2px rgba(0, 0, 0, 0.2)"}}
    animate={props.doAnimate ? 'animate' : ''}
    variants={props.Pagevariants}>
      <motion.div className='flex text-5xl -mt-6 ' initial={{y:-400}} animate={{y:0}} transition={{type:"spring"}}>Skills</motion.div>
   
      <MatterCircles  />
    

      
      {/* <motion.div className=' absolute ' 
        initial={{x:0}}
        animate={{x:180}}
        transition={{ ease: "linear", duration:3 }}
       > 
        <motion.div className='flex rounded-full bg-[#747474]  w-16 h-16 lg:w-20 lg:h-20 items-center justify-center text-white text-xl'>
          <p className='text-center'>CSS </p>
        </motion.div>
      </motion.div>
      
      <div className='flex absolute rounded-full bg-[#747474] w-16 h-16 lg:w-24 lg:h-24 items-center justify-center text-white text-xl'> 
      <p className='text-center'>Skills </p>
      </div>

       <motion.svg
        width="80%"
        height="80%"
        initial="hidden"
        animate="visible"
        viewBox="-15 -65 592 600"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-[#DBD9D9]"
      >
       
        <motion.path
        className="relative " style={{ filter: 'drop-shadow(0px 12px 4px rgba(0, 0, 0, .2))' }}
          fill="none"
          fillRule="evenodd"
          clipRule="evenodd"
          strokeWidth={1}
          animate= {{ rotate: 360 }} transition={{ ease: "linear", duration:15, repeat: Infinity }}
          variants={draw}
          custom={1}
          d="M281.5 311C333.32 311 375 276.136 375 233.5C375 190.864 333.32 156 281.5 156C229.68 156 188 190.864 188 233.5C188 276.136 229.68 311 281.5 311ZM281.5 312C333.691 312 376 276.854 376 233.5C376 190.146 333.691 155 281.5 155C229.309 155 187 190.146 187 233.5C187 276.854 229.309 312 281.5 312Z"
        > 
       
        </motion.path>

        <motion.path
          className="" style={{ filter: 'drop-shadow(0px 12px 4px rgba(0, 0, 0, .2))' }}
          fill="none"
          fillRule="evenodd"
          clipRule="evenodd"
          strokeWidth={1}
          variants={draw}
          animate= {{ rotate: -360 }} transition={{ ease: "linear", duration:15, repeat: Infinity }}
          custom={2}
          d="M281 357C364.02 357 431 300.874 431 232C431 163.126 364.02 107 281 107C197.98 107 131 163.126 131 232C131 300.874 197.98 357 281 357ZM281 358C364.395 358 432 301.588 432 232C432 162.412 364.395 106 281 106C197.605 106 130 162.412 130 232C130 301.588 197.605 358 281 358Z"
        />

        <motion.path
          className="" style={{ filter: 'drop-shadow(0px 12px 4px rgba(0, 0, 0, .2))' }}
          fill="none"
          fillRule="evenodd"
          clipRule="evenodd"
          strokeWidth={1}
          animate= {{ rotate: 360 }} transition={{ ease: "linear", duration:15, repeat: Infinity }}
          variants={draw}
          custom={3}
          d="M281.829 411.035C400.465 410.247 495.787 329.303 495.132 230.597C494.476 131.891 398.088 52.2194 279.451 53.0073C160.815 53.7952 65.4936 134.74 66.1491 233.446C66.8047 332.152 163.193 411.823 281.829 411.035ZM281.836 412.035C400.848 411.245 496.792 330.009 496.132 230.59C495.471 131.171 398.457 51.2169 279.445 52.0073C160.432 52.7977 64.4889 134.033 65.1492 233.452C65.8094 332.871 162.823 412.826 281.836 412.035Z"
        />

        <motion.path
          className="z-50	" style={{ filter: 'drop-shadow(0px 12px 4px rgba(0, 0, 0, .2))' }}
          fill="none"
          fillRule="evenodd"
          clipRule="evenodd"
          strokeWidth={1}
          animate= {{ rotate: -360 }} transition={{ ease: "linear", duration:15, repeat: Infinity }}
          variants={draw}
          custom={4}
          d="M282.527 461.737C434.839 460.725 557.309 356.794 556.466 229.957C555.624 103.12 431.785 0.824662 279.473 1.83622C127.161 2.84778 4.69143 106.779 5.53381 233.616C6.37618 360.453 130.215 462.749 282.527 461.737ZM282.534 462.737C435.222 461.723 558.313 357.501 557.466 229.951C556.619 102.4 432.154 -0.177815 279.466 0.836245C126.778 1.85031 3.68672 106.072 4.53383 233.623C5.38094 361.173 129.846 463.751 282.534 462.737Z"
        />
        
      </motion.svg> */}

    </motion.div>
  )
}

export default Skills