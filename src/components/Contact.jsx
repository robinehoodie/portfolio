import React from 'react'
import linkedIn from '../image/linkedIn.png';
import gmail from '../image/gmail.png';
import github from '../image/github.png';
import resume from '../image/resume.png';
import resumeFile from '../image/Robine_Cole_Jumalon - Resume.pdf';
import { motion} from 'framer-motion';

function Contact(props) {
  const isTablet = window.innerWidth < 1024;
  const redirectToLink = (url) => {
    window.open(url, '_blank');
  };

  const openGmailCompose = () => {
    props.setCursorText("Copied")
    const yourEmail = 'robinecole526@gmail.com'
    navigator.clipboard.writeText(yourEmail)
      
  };

    const handleDownload = () => {
     
      const fileUrl = resumeFile;
      
      // Creating a hidden anchor element
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = 'Robine_Cole_Jumalon - Resume';
      
      // Triggering the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  

  return (
    <motion.div className=' w-full h-screen flex flex-col justify-center items-center' 
    style={{boxShadow: props.darkMode?props.doAnimate? "0 25px 50px -12px rgba(255, 255, 255, 0.25)":"":
    props.doAnimate?"0 25px 50px -12px rgba(0, 0, 0, 0.25)":""}}
    animate={props.doAnimate ? 'animate' : ''}
    variants={props.Pagevariants}>
      <div className='flex flex-row justify-center items-center -mt-16 '>
      <motion.a  href="https://github.com/robinehoodie"  target="_blank" ref={isTablet?{}:props.contactRef.contact1} 
      className=' w-[100px] h-[90px] rounded-full  m-5 cursor-none ' 
      style={{backgroundColor: props.darkMode?"white":0}}
       onMouseEnter={isTablet?() => {}:() => props.contactEnter(0)} onMouseLeave={props.contactLeave} 
       initial={{x:-800}} animate={{x:0}} transition={{type:"spring", velocity:"100"}}>
        <img src={github} alt="github" className="w-full h-full"
         />
      </motion.a>
      <motion.a href="https://www.linkedin.com/in/robine-cole-jumalon-a2976527b/"  target="_blank" ref={isTablet?{}:props.contactRef.contact2} 
      className=' w-[100px] h-[90px] rounded-md  m-5 cursor-none ' 
      onMouseEnter={isTablet?() => {}:() => props.contactEnter(1)} onMouseLeave={props.contactLeave}
      initial={{y:800}} animate={{y:[800,150,150,0,0]}} transition={{type:"tween", times:[1,1.2], duration:2}}>
        <img src={linkedIn} alt="linkedIn" className="w-full h-full" 
         />
      </motion.a>
      <motion.a onClick={openGmailCompose} target="_blank" ref={isTablet?{}:props.contactRef.contact3} 
      className=' w-[100px] h-[90px] rounded-lg  m-5 cursor-none ' 
      onMouseEnter={isTablet?() => {}:() => props.contactEnter(2)} onMouseLeave={props.contactLeave}
      initial={{x:800}} animate={{x:0}} transition={{type:"spring", velocity:"100"}}>
        <img src={gmail} alt="gmail" className="w-full h-full" 
         />
      </motion.a>
      </div>
      {!isTablet?(
         <motion.div className='fixed bottom-0 right-0 w-1/4 h-3/4 cursor-none' 
         onClick={handleDownload}
         initial={{rotate:325, y:900, x:500}} animate={{y:420, x:220}} whileHover={{y:380, x:180}} 
         onMouseEnter={props.resumeEnter} onMouseLeave={props.resumeLeave}>
         <img src={resume} alt="resume" className="w-full h-full" />
        </motion.div>
      ):
        <motion.button initial={{opacity:0}} animate = {{opacity:1}} transition={{delay:2}}
        className='button-30 flex ' onClick={handleDownload}>Resume</motion.button>
      }
     
    </motion.div>
  )
}

export default Contact