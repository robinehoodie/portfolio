import React, {useRef, useEffect, useState} from 'react'
import { motion} from 'framer-motion'
import MoveLetters from './sub/MoveLetters';
import { useTrail, animated} from 'react-spring'
import About1 from '../image/Aboutpic1.jpeg'
import About2 from '../image/Aboutpic2.jpeg'
import About3 from '../image/Aboutpic3.jpeg'
import About4 from '../image/Aboutpic4.jpeg'
import About5 from '../image/Aboutpic5.jpeg'
import About6 from '../image/Aboutpic6.jpeg'
  
    
function About(props) {
    // const [alternateContent, setAlternateContent] = useState(false);
    const quote = ['LIVE', 'JUST', 'LAUGH' , 'DO', 'LOVE', 'IT']
    const title = ['R', 'O', 'B' , 'I', 'N', 'E']
    const items = [
        About1,
        About2,
        About3,
        About4,
        About5,
        About6,
      ]; 


  // const { transform, opacity } = useSpring({
  //   opacity: alternateContent ? 1 : 0,
  //   transform: `perspective(600px) rotateY(${alternateContent ? 180 : 0}deg)`,
  //   config: { mass: 5, tension: 500, friction: 80 },
  // });

  const delays = [500, 600, 700, 800, 900, 1000];
  const delays2 = [700, 600, 500, 400, 300, 200];
 
    const alternateContent = useRef(false);
      useEffect(() => {
        
        const interval = setInterval(() => {
          if (alternateContent.current) {
            api.start({
              rotateY: 0,
            });
            alternateContent.current = false;
            
          } else {
            api.start({
              rotateY: 180,
            });
            alternateContent.current = true;
          }
          
        }, 5000);
        
        return () => clearInterval(interval);
      }, []);
    
      const [trail, api] = useTrail(items.length, (index) => ({
        rotateX: 0,
        rotateY: 0,
        delay: delays[index],
        delay2: delays2[index],
      }));
      
    
      const isFlipped = useRef(false);
    
      const handleClick = () => {
        if (isFlipped.current) {
          api.start({
            rotateX: 0,
          });
          isFlipped.current = false;
        } else {
          api.start({
            rotateX: 180,
          });
          isFlipped.current = true;
        }
      };
      const isTablet = window.innerWidth < 1024;
      const isMobile = window.innerWidth < 768;
      const isLaptop = window.innerWidth === 1024;
      

      const [delayedDarkMode, setDelayedDarkMode] = useState(props.darkMode);

      useEffect(() => {
        const delayTimers = props.darkMode ? items.map((_, index) =>
          setTimeout(() => {
            setDelayedDarkMode((prev) => ({ ...prev, [index]: props.darkMode }));
          }, delays[index])
        ): 
        items.map((_, index) =>
          setTimeout(() => {
            setDelayedDarkMode((prev) => ({ ...prev, [index]: props.darkMode }));
          }, delays2[index])
        ); 
      
        return () => {
          delayTimers.forEach((timer) => clearTimeout(timer));
        };
      }, [props.darkMode]);

      const [size, setSize] = useState("200px")
      const [margin, setMargin] = useState("m-10")
      const [aboutLayout, setAboutLayout] = useState("justify-center items-center text-center")
      const [titleTextSize, setTitleTextSize] = useState(40)
      const [quoteTextSize, setQuoteTextSize] = useState(40)
      const [lowerLayout, setLowerLayout] = useState(" h-3/6 justify-end text-end")
      const [textLowerLayout, setTextLowerLayout] = useState("absolute")

      useEffect(() => {
        if (isMobile){
          setSize("45px")
          setMargin("ml-2")
          setAboutLayout("mt-10")
          setTitleTextSize(15)
          setQuoteTextSize(10)
          setLowerLayout("h-1/6 justify-center text-center")
          setTextLowerLayout("absolute")
        }else if (isTablet){
          setSize("100px")
          setMargin("ml-5")
          setAboutLayout(" justify-center text-center")
          setTitleTextSize(40)
          setQuoteTextSize(20)
          setLowerLayout("h-2/6 justify-center text-center mt-10")
          setTextLowerLayout("absolute left-28")
        }else if(isLaptop){
          setSize("120px")
          setMargin("m-5")
          setAboutLayout("justify-center items-center text-center")
          setTitleTextSize(40)
          setQuoteTextSize(30)
          setLowerLayout(" h-3/6 justify-end text-end")
          setTextLowerLayout("absolute")
        }else{
          setSize("200px")
          setMargin("m-10")
          setAboutLayout("justify-center items-center text-center")
          setTitleTextSize(40)
          setQuoteTextSize(40)
          setLowerLayout(" h-3/6 justify-end text-end")
          setTextLowerLayout("absolute")
        }
      }, []);
      

  return (
    <motion.div className='w-full h-screen flex-row ' 
    style={{boxShadow: props.darkMode?props.doAnimate? "0 25px 50px -12px rgba(255, 255, 255, 0.25)":"":
    props.doAnimate?"0 25px 50px -12px rgba(0, 0, 0, 0.25)":""}}
    animate={props.doAnimate ? 'animate' : ''}
    variants={props.Pagevariants}>
    <motion.div  className='w-full h-1/4 pt-16 lg:pl-10 lg:text-left text-center xl:text-2xl lg:text-xl md:text-lg text-xs select-none' initial={{x:-550}} animate={{x:0}} transition={{type:"spring"}}>
    <p className='inline-block'><p className='inline-block'><MoveLetters word="I am"/></p>&nbsp;<b className='inline-block'><MoveLetters word="Robine Cole Jumalon"/></b><p className='inline-block'><MoveLetters word=", a "/></p> <b className='inline-block'><MoveLetters word="DEVELOPER"/></b> <p className='inline-block'><MoveLetters word="and a "/></p>&nbsp;
    <b className='inline-block'><MoveLetters word="DESIGNER"/></b></p>
    <p className=''><MoveLetters word="I specialize in crafting user-centric digital experiences,"/></p>
    <p className=''><MoveLetters word="harmonizing functionality with aesthetics to deliver"/></p>
    <p className=''><MoveLetters word="impactful solutions."/></p>
    </motion.div>
    
    <motion.div className={`w-full lg:h-2/6 h-1/6 ${aboutLayout} flex flex-row `}
    >
    {trail.map(({ rotateX, rotateY }, i) => (
        <motion.div key={items[i].key} onClick={handleClick} 
        initial={{y: i%2 === 0 ? -700:700 }} animate={{y:0}} transition={{delay: 1.5 + i * 0.1, duration:1}}> 
          <animated.div
            className= {margin}
            style={{
              cursor : 'none',
              width: size,
              height: size,
              position: 'relative',
              transformStyle: 'preserve-3d',
            }}
            onMouseEnter={isTablet?() =>{}:() => props.aboutImageEnter(i)}
            onMouseLeave={props.aboutImageLeave}
          >
            <animated.div
            className=""
              style={{
                display:"flex",
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: isTablet? props.darkMode? "black":'#fafafa': delayedDarkMode[i] ? 'black' : '#fafafa',
                color: isTablet? props.darkMode? '#fafafa':'black': delayedDarkMode[i] ? '#fafafa' : 'black',
                fontSize: titleTextSize,
                border: isTablet? props.darkMode? 'solid 2px #fafafa' : 'solid 2px #1a1a1a': delayedDarkMode[i] ? 'solid 2px #fafafa' : 'solid 2px #1a1a1a' ,
                backfaceVisibility: 'hidden',
                transform: rotateX.to((val) => `rotateX(${val}deg)`),
              }}
            >
              {title[i]}
            </animated.div>

            <animated.div 
            style={{
              backfaceVisibility: 'hidden',
              transform: rotateX.to((val) => `rotateX(${180 - val}deg)`),
              width: '100%',
              height: '100%',
              transformStyle: 'preserve-3d',
            }}>
              { i % 2 === 0? (<div><animated.div
                className=""
                  style={{
                    display:"flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: isTablet? props.darkMode? "black":'#fafafa': delayedDarkMode[i] ? 'black' : '#fafafa',
                    color: isTablet? props.darkMode? '#fafafa':'black': delayedDarkMode[i] ? '#fafafa' : 'black',
                    fontSize: quoteTextSize,
                    border: isTablet? props.darkMode? 'solid 2px #fafafa' : 'solid 2px #1a1a1a': delayedDarkMode[i] ? 'solid 2px #fafafa' : 'solid 2px #1a1a1a' ,
                    backfaceVisibility: 'hidden',
                    transform: rotateY.to((val) => `rotateY(${val}deg)`)
                  }}
                >
                  {quote[i]}
                </animated.div>
                <animated.img
                  src={items[i]}
                  alt={`Image ${i}`}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    transform: rotateY.to((val) => `rotateY(${180 - val}deg)`),
                    backfaceVisibility: 'hidden',
                  }}
                /></div> 
                ): (<div><animated.img
                  src={items[i]}
                  alt={`Image ${i}`}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    transform: rotateY.to((val) => `rotateY(${val}deg)`),
                    backfaceVisibility: 'hidden',
                    
                  }}
                />
                <animated.div
                className="border-solid border-10 border-sky-500"
                  style={{
                    display:"flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: isTablet? props.darkMode? "black":'#fafafa': delayedDarkMode[i] ? 'black' : '#fafafa',
                    color: isTablet? props.darkMode? '#fafafa':'black': delayedDarkMode[i] ? '#fafafa' : 'black',
                    fontSize: quoteTextSize,
                    border: isTablet? props.darkMode? 'solid 2px #fafafa' : 'solid 2px #1a1a1a': delayedDarkMode[i] ? 'solid 2px #fafafa' : 'solid 2px #1a1a1a' ,
                    transform: rotateY.to((val) => `rotateY(${180 - val}deg)`),
                    backfaceVisibility: 'hidden',
                  }}
                >
                  {quote[i]}
                </animated.div>
                </div>)

              }
      
           
               
            </animated.div>
          </animated.div>
        </motion.div>
      ))}
        
    </motion.div>

    <motion.div className={`w-full  ${lowerLayout} lg:text-left  xl:pl-[54%] lg:pl-[35%] lg:pt-[3%] md:text-lg text-xs xl:text-2xl lg:text-xl select-none`} initial={{x:900}} animate={{x:0}} transition={{type:"spring", delay:.5}}>
    <p><MoveLetters word="I can help you with ...."/></p>
    <motion.p className='relative'>
      <motion.p
        className={`${textLowerLayout} text-black`}
        initial={{scale:1}}
        animate= {props.darkMode?{scale:0}:{scale:1}}
        transition={props.darkMode?{delay:.7}:{delay:.2}}
      >
      <p className='lg:pl-6 inline-block'><b className='inline-block'><MoveLetters word="DESIGN"/></b><p className='inline-block'><MoveLetters word=", I can craft unique and user-friendly designs, combining "/></p></p>
       <p className='lg:pl-6'><MoveLetters word="creativity with technical expertise to elevate your online presence "/></p>
       <p className='lg:pl-6'><MoveLetters word="and effectively communicate your brand's message."/></p>
       </motion.p>
      <motion.p
        className={`${textLowerLayout} text-white`}
        initial={{scale:0}}
        animate= {props.darkMode?{scale:1}:{scale:0}}
        transition={props.darkMode?{delay:.7}:{delay:.2}}
      >
    
      <p className='lg:pl-6 inline-block'><b className='inline-block'><MoveLetters word="DEVELOP"/></b><p className='inline-block'><MoveLetters word=",  I specialize in turning designs into  tangible realities, "/></p></p>
       <p className='lg:pl-6'><MoveLetters word="emphasizing scalable output with flawless animation, seamless "/></p>
       <p className='lg:pl-6'><MoveLetters word=" transitions, and engaging interactions."/></p>
      </motion.p> 
      </motion.p>
    </motion.div>
    </motion.div>
  )
}

export default About