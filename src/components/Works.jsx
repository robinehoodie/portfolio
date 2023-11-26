import React, { useState, useEffect } from 'react';
import Card from './sub/Card.jsx';
import { motion, useAnimation } from 'framer-motion';
import Typed from 'react-typed';


function Works(props) {
  const [contentIndex, setContentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null);
  const [scrollMore, setScrollMore] = useState(true);
  const [animationDirection, setAnimationDirection] = useState("enter")
  const controlsCard = useAnimation();
  const controlsTitle = useAnimation();
  const isTablet = window.innerWidth < 1024;
  const isLaptop = window.innerWidth < 1440;

  const contents = [
    {
      title: 'Timber Track',
      link: "https://github.com/w3barsi/timbertrack",
      cards: [
        { key: 1, width: 300, height: 200, x: -410, y: 140, imgs:  'WorkData/timber0.png' },
        { key: 2, width: 400, height: 200, x: 0, y: -10, imgs:'WorkData/timber1.png'},
        { key: 3, width: 400, height: 200, x: -448, y: -20, imgs: 'WorkData/timber2.png'},
        { key: 4, width: 400, height: 200, x: 20, y: isLaptop? -70:-160, imgs: 'WorkData/timber3.png'},
        { key: 5, width: 250, height: 150, x: -380, y: -190, imgs:  'WorkData/timber4.png'},
      ],
    },
    {
      title: 'Timberoll',
      link: "https://github.com/robinehoodie/OOP",
      cards: [
        { key: 1, width:400, height: 200, x: -350, y: 40, imgs: process.env.PUBLIC_URL + '/WorkData/payroll1.png' },
        { key: 2, width: 300, height: 200, x: 70, y: isLaptop? -60:0, imgs: process.env.PUBLIC_URL + '/WorkData/payroll0.png'},
        { key: 3, width: 400, height: 200, x: -430, y: -60, imgs: process.env.PUBLIC_URL + '/WorkData/payroll2.png'},
        { key: 4, width: 400, height: 200, x: 50, y: isLaptop? -130:-100, imgs: process.env.PUBLIC_URL + '/WorkData/payroll3.png'},
      ],
    },

    {
      title: 'Chess Game',
      link: "https://github.com/robinehoodie/OOP",
      cards: [
        { key: 1, width: 300, height: 300, x: 100, y: isLaptop? 50:0, imgs: process.env.PUBLIC_URL + '/WorkData/chess1.png'},
        { key: 2, width: 200, height: 200, x: -300, y: -130, imgs: process.env.PUBLIC_URL + '/WorkData/chess0.png'},
        { key: 3, width: 300, height: 300, x: -50, y: -70, imgs: process.env.PUBLIC_URL + '/WorkData/chess2.png'},
      ],
    }, 
    {
      title: 'Chat App',
      cards: [
        { key: 1, width: 300, height: 200, x: -400, y: 200, imgs: process.env.PUBLIC_URL + '/WorkData/chat0.png'},
        { key: 2, width: 250, height: 550, x: isLaptop? -30:0, y: -150, imgs: process.env.PUBLIC_URL + '/WorkData/chat1.png'},
      ],
    },
  ];


  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      const context = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  };

  const handlePrev = (e) => {
    if (contentIndex > 0) {
      setIsAnimating(true);
      setAnimationDirection("enter")
      controlsCard.start({ scale: 0 , opacity:0.1 });
      controlsTitle.start({ opacity: 0 });

      setTimeout(() => {
        setContentIndex(contentIndex - 1);
        controlsCard.start({ y: 0 });
        controlsTitle.start({ opacity: 1 });
      }, 2000);

      setTimeout(() => {
        setIsAnimating(false);
      }, 3500);
    }
  }

  const handleNext = (e) => {
    if (!isAnimating) {
      if (contentIndex < contents.length - 1) {
        setIsAnimating(true);
        setAnimationDirection('enter');
        controlsTitle.start({ opacity: 0 });
        controlsCard.start({ y: 1200 });
        
        setTimeout(() => {
          setContentIndex(contentIndex + 1);
        }, 2000);

        setTimeout(() => {
          setIsAnimating(false);
        }, 3000);

      }
  }
}
  const handleWheel = (e) => {
    if(scrollMore){
      setScrollMore(false)
    }
    if (!isAnimating) {
      if (e.deltaY > 0 && contentIndex < contents.length - 1) {
        setIsAnimating(true);
        setAnimationDirection('entrance');
        setDirection('down');
        controlsTitle.start({ opacity: 0 });
        controlsCard.start({ y: 1200 });
        
        setTimeout(() => {
          setContentIndex(contentIndex + 1);
        }, 2000);

        setTimeout(() => {
          setIsAnimating(false);
        }, 3000);

      } else if (e.deltaY < 0 && contentIndex > 0) {
        setIsAnimating(true);
        setAnimationDirection("enter")
        setDirection('up');
        controlsCard.start({ scale: 0 , opacity:0.1 });
        controlsTitle.start({ opacity: 0 });

        setTimeout(() => {
          setContentIndex(contentIndex - 1);
          controlsCard.start({ y: 0 });
          controlsTitle.start({ opacity: 1 });
        }, 2000);

        setTimeout(() => {
          setIsAnimating(false);
        }, 3500);
      }
    }
  };

  useEffect(() => {
    if (contentIndex !== null) {
      controlsCard.start({ scale: 1, opacity: 1, y: 0  });
      controlsTitle.start({ opacity: 1 });
      setAnimationDirection('exit');
    }
  }, [contentIndex, controlsCard, controlsTitle]);

  useEffect(() => {
    const handleDebouncedWheel = debounce(handleWheel, 100);
    window.addEventListener('wheel', handleDebouncedWheel);

    return () => {
      window.removeEventListener('wheel', handleDebouncedWheel);
    };
  }, [handleWheel]);


  return (
    <motion.div className="" animate={props.doAnimate ? 'animate' : ''}
    variants={props.Pagevariants} 
    style={{boxShadow: props.doAnimate? "4px 4px 5px -2px rgba(0, 0, 0, 0.2)":""}}>
      <motion.div
        className= "w-full h-screen flex flex-col justify-center items-center text-center"
        key={contentIndex}
      >
         {isTablet && (
        <motion.div className='flex text-xl'>
            <p className='inline mr-40 md:mr-80' onClick={handlePrev}>← Prev </p> 
            <p className='inline md:ml-40' onClick={handleNext}>Next→ </p>  
        </motion.div>
        )}
        <motion.div className={`${!isTablet? "2xl:text-5xl lg:text-4xl fixed right-60": "text-3xl"}`} animate={controlsTitle}  onClick = {()=>console.log(contents[contentIndex].cards.length)}>
       
         <a href={[contents[contentIndex].link]} target='__blank' onMouseEnter={() => props.workLinkEnter(contentIndex)} onMouseLeave={props.workLinkLeave}>
            <Typed
              strings={[contents[contentIndex].title]}
              typeSpeed={70}

            />
          </a>
        </motion.div>
  
        {contents[contentIndex].cards.map((cardParams, index) => 
           !isTablet ? (
          <motion.div key={cardParams.key} initial={direction === "down"?{scale:0}:direction==="up"?{y:1200}:{scale:0}}
          animate={controlsCard} 
          transition={{ delay: animationDirection === "exit"? (contents[contentIndex].cards.length - index ) * 0.2 : index * 0.2
          , type:"spring", duration:2, bounce:0.5}} 
          className='relative' style={{top:cardParams.y , left:cardParams.x, width:cardParams.width, height:cardParams.height}}>
            <Card
              x = {cardParams.x}
              y = {cardParams.y}
              width={cardParams.width}
              height={cardParams.height}
              imgs={cardParams.imgs}
            />
          </motion.div>
          ): (
            <motion.div key={cardParams.key} initial={direction === "down"?{scale:0}:direction==="up"?{y:1200}:{scale:0}}
          animate={controlsCard} 
          transition={{ delay: animationDirection === "exit"? (contents[contentIndex].cards.length - index ) * 0.2 : index * 0.2
          , type:"spring", duration:2, bounce:0.5}}
          className='mt-4'>
              <Card
              x = {0}
              y = {0}
              width={cardParams.width/2}
              height={cardParams.height/2}
              imgs={cardParams.imgs}
            />

          </motion.div>
          )
        )}
      </motion.div>
      {!isTablet? (<motion.div className='text-lg fixed bottom-16 right-[30%]' animate={!scrollMore?{y:100}:{}} 
      transition={{duration:0.5}}> Scroll for more ⇅ </motion.div>) : ("") }
      <motion.div className='text-2xl fixed bottom-16 right-12' >
        {contentIndex + 1}/{contents.length}
      </motion.div>
    </motion.div>
  );
}

export default Works;


