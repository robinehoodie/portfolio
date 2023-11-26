import React , {useState, useRef} from 'react'
import { motion, useAnimation } from 'framer-motion'
import Navbar from './Navbar.jsx'
import Background from './sub/Background.jsx';
import Hero from './Hero.jsx';
import MovingComponent from './sub/MovingComponent.jsx';
import Footer from './Footer.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Works from './Works.jsx'
import  Contact  from './Contact.jsx';

function Portfolio(props) {
    const svgControls = useAnimation();
    const menuAppear = useAnimation();
    
    const [isMenuClick, setIsMenuClick] = useState(true)
    const [isClicked, setIsClicked] = useState(true)

  const handleClicker = () =>{
    if (props.firstOpen === true){
      props.setFirstOpen(false) 
    }
    setIsClicked(!isClicked)
  }
  const menuClicked = () => {
    setIsMenuClick(!isMenuClick)
    if (isMenuClick){
      menuAppear.start({
        y:10,
        transition: {
          duration: 1
        }
      });
      handleTap()
    }else{
      menuAppear.start({
        y:110,
        transition: {
          delay:.3,
          duration: 1
        }
      });
    }
    
  }
    const handleTap = () => {
        svgControls.start({
          d: [
            'M129 60C129 93.1371 100.122 120 64.5 120C28.8776 120 0 93.1371 0 60C0 26.8629 28.8776 0 64.5 0C100.122 0 129 26.8629 129 60Z',
            'M129 19.7274C129 52.8645 100.122 79.7274 64.5 79.7274C28.8776 79.7274 0 52.8645 0 19.7274C0 -13.4096 28.8776 5.4996 64.5 5.4996C100.122 5.4996 129 -13.4096 129 19.7274Z',
            'M129 14.7276C129 47.8647 100.122 74.7276 64.5 74.7276C28.8776 74.7276 0 47.8647 0 14.7276C0 -18.4095 28.8776 14.7275 64.5 14.7275C100.122 14.7275 129 -18.4095 129 14.7276Z',
            'M129 60C129 93.1371 100.122 120 64.5 120C28.8776 120 0 93.1371 0 60C0 26.8629 28.8776 0 64.5 0C100.122 0 129 26.8629 129 60Z'
          ],
          transition: {
            ease: [0.6, .5, .6, .3],
            duration: 0.7,
            delay: .5
          }
        });
    }

    const isTablet = window.innerWidth < 1024;


    const containerRef = useRef(null);

    const [Page, setPage] = useState("hero");
    const [doAnimate, setDoAnimate] = useState(false);

    const Pagevariants = {

      animate: {
        scale: [1, 0.5, 0.5, 1, 1],
        rotate: [0, 0, 180, 90],
        borderRadius: ['0%', '0%', '50%', '50%'],
        y:[0,0,0,0,1200],
       
        transition: {
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1, 1.5],
        },
      },
    };
  

  return (
    <motion.div className={` mx-auto py-2 ${isTablet? props.darkMode? "dark bg-black":"text-black bg-white":"" }`}  animate={props.darkMode && !isTablet? {color:"white"}: {}} 
    transition={{type:"spring", delay:0.5}} >
    
       <Navbar
        darkMode={props.darkMode} 
        toggleDarkMode={props.toggleDarkMode}
        firstOpen = {props.firstOpen} 
        isTablet = {isTablet}
        menuClicked = {menuClicked}
        menuEnter = {props.menuEnter}
        menuLeave = {props.menuLeave}
        modeEnter = {props.modeEnter}
        modeLeave = {props.modeLeave}
        heroEnter = {props.heroEnter}
        heroLeave = {props.heroLeave}
        setDoAnimate = {setDoAnimate}
        setPage = {setPage}
        />
        

        { !isTablet?(<Background 
        darkMode={props.darkMode}
        />) : ("")}

        {Page==='hero' && (
          <Hero
          firstOpen = {props.firstOpen} 
          heroImageEnter = {props.heroImageEnter}
          heroImageLeave = {props.heroImageLeave}
          containerRef = {containerRef}
          doAnimate = {doAnimate}
          Pagevariants = {Pagevariants}
          />
          )}

        {Page==='about' && (
            <About 
            aboutImageEnter = {props.aboutImageEnter}
            aboutImageLeave  = {props.aboutImageLeave}
            darkMode = {props.darkMode}
            doAnimate = {doAnimate}
            Pagevariants = {Pagevariants}
            />
        )}

        {Page==='work'? !isTablet?
            (
              <MovingComponent> 
              
                  <Works
                  workLinkEnter = {props.workLinkEnter}
                  workLinkLeave = {props.workLinkLeave}
                  doAnimate = {doAnimate}
                  Pagevariants = {Pagevariants}
                  />
              
            </MovingComponent>
            ):(
              <Works
              workLinkEnter = {props.workLinkEnter}
              workLinkLeave = {props.workLinkLeave}
              doAnimate = {doAnimate}
              Pagevariants = {Pagevariants}
              />
            ):""
        }

        {Page==='contact' && (
           <Contact
           contactEnter = {props.contactEnter}
           contactLeave = {props.contactLeave}
           contactRef = {props.contactRef}
           setCursorText = {props.setCursorText}
           resumeEnter = {props.resumeEnter}
           resumeLeave = {props.resumeLeave}
           darkMode = {props.darkMode}
           doAnimate = {doAnimate}
           Pagevariants = {Pagevariants}
           />
        )}
       
        { Page==='skills' && (
          <Skills 
          doAnimate = {doAnimate}
          Pagevariants = {Pagevariants}
          />
        )}
      
        
        <Footer 
        menuAppear = {menuAppear}
        svgControls = {svgControls}
        isMenuClick = {isMenuClick}
        isTablet = {isTablet}
        handleClicker = {handleClicker}
        setPage = {setPage}
        setDoAnimate = {setDoAnimate}
        menuClicked = {menuClicked}
        Page = {Page}
        setFirstOpen= {props.setFirstOpen}
        />

    </motion.div >
  )
}

export default Portfolio