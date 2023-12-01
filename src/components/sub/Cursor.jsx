import React, {useState, useRef, useEffect} from 'react'
import useMouse from "@react-hook/mouse-position";
import { motion } from 'framer-motion'
import Portfolio from '../Portfolio';


function Cursor() {
    const [firstOpen, setFirstOpen] = useState(true)
    const [darkMode, setDarkMode] = useState(false)
    const [cursorText, setCursorText] = useState("");
    const [cursorVariant, setCursorVariant] = useState("default");
    const [bgColor, setBgColor] = useState("")

    const contactRef = {
      contact1: useRef(null),
      contact2: useRef(null),
      contact3: useRef(null),
    };
    const [contactPositionX, setContactPositionX] = useState()
    const [contactPositionY, setContactPositionY] = useState()
    const [contactNumber, setContactNumber] = useState()

    const isTablet = window.innerWidth < 1024;

    function toggleDarkMode() {
        setDarkMode(prevDarkMode => !prevDarkMode)
        if (firstOpen === true){
          setFirstOpen(false) 
        }
      }

    const ref = React.useRef(null);
    const mouse = useMouse(ref, {
      enterDelay: 100,
      leaveDelay: 100
    });
  
    let mouseXPosition = 0;
    let mouseYPosition = 0;
  
    if (mouse.x !== null) {
      mouseXPosition = mouse.clientX;
    }
  
    if (mouse.y !== null) {
      mouseYPosition = mouse.clientY;
    }
  
    const variants = {
      default: {
        opacity: isTablet?0:1,
        height: 10,
        width: 10,
        fontSize: "16px",
        backgroundColor: darkMode?"white":"black",
        x: mouseXPosition + 15,
        y: mouseYPosition + 15, 
        transition: {
          type: "spring",
          mass: 0.6
        }
      },
      menu: {
        opacity: isTablet?0:1,
        // backgroundColor: "rgba(255, 255, 255, 0.6)",
        backgroundColor: "#5B7C99",
        color: "#000",
        height: 80,
        width: 80,
        fontSize: "30px",
        x: mouseXPosition + 5,
        y: mouseYPosition + 5
      },
      
      mode: {
        opacity: isTablet?0:1,
        backgroundColor: darkMode?"white":"black",
        color: darkMode? "#000":"#fff",
        height: 80,
        width: 80,
        fontSize: "30px",
        // fontSize: "18px",
        x: mouseXPosition + 5,
        y: mouseYPosition + 5
      },

      heroImage: {
        opacity: isTablet?0:1,
        backgroundColor: "#FFCBA5",
        color: "#000",
        height: 100,
        width: 100,
        fontSize: "30px",
        x: mouseXPosition - 32,
        y: mouseYPosition - 32
      },

      aboutImage: {
        opacity: isTablet?0:1,
        backgroundColor : bgColor,
        color: "#fff",
        height: 80,
        width: 80,
        fontSize: "30px",
        x: mouseXPosition - 32,
        y: mouseYPosition - 32
      },

      Contact: {
        opacity: isTablet?0:1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: "white",
        height: 105,
        width: 110,
        fontSize: "18px",
        x: contactPositionX -5,
        y: contactPositionY - 7,
        borderRadius: contactNumber===0?'200px':'10px',
      },

      resume: {
        opacity: isTablet?0:1,
        backgroundColor: "#C3C0C1",
        color: "#000",
        height: 100,
        width: 100,
        fontSize: "30px",
        x: mouseXPosition -32 ,
        y: mouseYPosition -32
      },
      
      workLink: {
        opacity: 0,
        x: mouseXPosition + 35,
        y: mouseYPosition + 35
      },

      home: {
        opacity: isTablet?0:1,
        backgroundColor : "#FF8F8F",
        color: "#fff",
        height: 80,
        width: 80,
        fontSize: "30px",
        x: mouseXPosition + 5,
        y: mouseYPosition + 5
      },

      workCards: {
        opacity: 0,
        backgroundColor : "transparent",
        color: "#fff",
        height: 80,
        width: 80,
        fontSize: "30px",
        x: mouseXPosition + 50,
        y: mouseYPosition + 50
      },

    };
    
    const [text, setText] = useState("🌜")
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
      if (darkMode && hasInteracted) {
        setCursorText("🌞");
        setText("🌞")
      } else if(!hasInteracted){
        setCursorText("");
      }else {
        setCursorText("🌜");
        setText("🌜")
      }
    }, [darkMode, hasInteracted]);


    const spring = {
      type: "spring",
      stiffness: 500,
      damping: 28
    };

    function heroImageEnter(event) {
        setCursorText("👀");
        setCursorVariant("heroImage");
      }
    
    function heroImageLeave(event) {
        setCursorText("");
        setCursorVariant("default");
      }
  
    function menuEnter(event) {
      setCursorText("👆🏼");
      setCursorVariant("menu");
    }
  
    function menuLeave(event) {
      setCursorText("");
      setCursorVariant("default");
    }
  
    function modeEnter(event) {
      setHasInteracted(true)
      setCursorText(text)
      setCursorVariant("mode");
    }
  
    function modeLeave(event) {
      setCursorText("");
      setCursorVariant("default");
    }

    const aboutImageEnter = (number) => {
      setCursorText("👆🏼");
      switch(number){
        case 0 : setBgColor("#ef476f"); break;
        case 1 : setBgColor("#f78c6b"); break;
        case 2 : setBgColor("#ffd166"); break;
        case 3 : setBgColor("#06d6a0"); break;
        case 4 : setBgColor("#118ab2"); break;
        case 5 : setBgColor("#073b4c"); break;
      }
      
      setCursorVariant("aboutImage");
    }
  
    function aboutImageLeave(event) {
      setCursorText("");
      setCursorVariant("default");
    }


    const contactEnter = (number) => {
      switch(number){
        case 0 : 
                 setCursorText("Github"); 
                 setContactPositionX(contactRef.contact1.current.getBoundingClientRect().x);
                 setContactPositionY(contactRef.contact1.current.getBoundingClientRect().y);
                 setContactNumber(0)
                 break;
        case 1 : 
                 setCursorText("LinkedIn"); 
                 setContactPositionX(contactRef.contact2.current.getBoundingClientRect().x);
                 setContactPositionY(contactRef.contact2.current.getBoundingClientRect().y);
                 setContactNumber(1)
                 break;
        case 2 : 
                 setCursorText("Gmail"); 
                 setContactPositionX(contactRef.contact3.current.getBoundingClientRect().x);
                 setContactPositionY(contactRef.contact3.current.getBoundingClientRect().y);
                 setContactNumber(1)
                 break;
        
      }
      
      setCursorVariant("Contact");
    }
  
    function contacLeave(event) {
      setCursorText("");
      setCursorVariant("default");
    }

    function resumeEnter(event) {
      setCursorText("📑");
      setCursorVariant("resume");
    }
  
    function resumeLeave(event) {
      setCursorText("");
      setCursorVariant("default");
    }

    const workLinkEnter = (number) => {
      setCursorVariant("workLink");
    }
  
    function workLinkLeave (event) {
      setCursorText("");
      setCursorVariant("default");
    }

    function heroEnter(event) {
      setCursorText("🏠");
      setCursorVariant("home");
    }
  
    function heroLeave(event) {
      setCursorText("");
      setCursorVariant("default");
    }

    function workCardEnter(event) {
      setCursorText("");
      setCursorVariant("workCards");
    }
  
    function workCardLeave(event) {
      setCursorText("");
      setCursorVariant("default");
    }

  return (
    <div className="h-screen w-screen" ref={ref}>
        <motion.div
          variants={variants}
          className="circle"
          animate={cursorVariant}
          transition={spring}
        >
          <span className="cursorText">{cursorText}</span>
        
        </motion.div>
        {isTablet?
        <Portfolio
        darkMode = {darkMode}
        firstOpen = {firstOpen}
        setFirstOpen = {setFirstOpen}
        toggleDarkMode = {toggleDarkMode}
        />:
          <Portfolio
          menuEnter = {menuEnter}
          menuLeave = {menuLeave}
          modeEnter = {modeEnter}
          modeLeave = {modeLeave}
          heroImageEnter = {heroImageEnter}
          heroImageLeave = {heroImageLeave}
          aboutImageEnter = {aboutImageEnter}
          aboutImageLeave = {aboutImageLeave}
          darkMode = {darkMode}
          firstOpen = {firstOpen}
          setFirstOpen = {setFirstOpen}
          toggleDarkMode = {toggleDarkMode}
          contactEnter = {contactEnter}
          contactLeave = {contacLeave}
          contactRef = {contactRef}
          setCursorText = {setCursorText}
          resumeEnter = {resumeEnter}
          resumeLeave = {resumeLeave}
          workLinkEnter = {workLinkEnter}
          workLinkLeave = {workLinkLeave}
          heroEnter = {heroEnter}
          heroLeave = {heroLeave}
          workCardEnter = {workCardEnter}
          workCardLeave = {workCardLeave}
        />}
    </div>
  )
}

export default Cursor