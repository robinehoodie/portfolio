import React, { useRef, useEffect } from 'react'
import { useSpring, animated, config , to } from 'react-spring'
import { useGesture } from '@use-gesture/react'


const calcX = (y, ly) => -(y - ly - window.innerHeight / 2.5) / 20
const calcY = (x, lx) => (x - lx - window.innerWidth / 2.5) / 20


export default function Card(props) {

  useEffect(() => {
    const preventDefault = (e) => e.preventDefault()
    document.addEventListener('gesturestart', preventDefault)
    document.addEventListener('gesturechange', preventDefault)

    return () => {
      document.removeEventListener('gesturestart', preventDefault)
      document.removeEventListener('gesturechange', preventDefault)
    }
  }, [])

  const target = useRef(null)
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale, opacity}, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      opacity: 1,
      x: 0,
      y: 0,
      config: { mass: 5, tension: 350, friction: 40 },
    })
  )

  useGesture(
    {
      
      onDrag: ({ active, offset: [x, y] }) =>
      api({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.1 }),
    onPinch: ({ offset: [d, a] }) => api({ zoom: d / 200, rotateZ: a }),
    onMove: ({ xy: [px, py], dragging }) =>
      !dragging &&
      api({
        rotateX: calcX(py, y.get()+ Math.abs(props.y)),
        rotateY: calcY(px, x.get()+ props.x),
        scale: 1.1,
      }),
    onHover: ({ hovering }) =>
      !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
    },
    { target, eventOptions: { passive: false } }
  );

  return (
  
    <animated.div className="container" 
    style={{
      width: props.width, height: props.height,
    }}>
      <animated.div
        ref={target}
        className="card"
        style={{
        
          transform: `perspective(600px)`,
          x,
          y,
          scale: to([scale, zoom], (s, z) => s + z),
          rotateX,
          rotateY,
          rotateZ,
          opacity,
        }}>
        <animated.div >
         
            <div style={{ backgroundImage: `url(${props.imgs})` ,width: props.width, height: props.height,}} />
       
        </animated.div>
      </animated.div>
      
    </animated.div>
  )
}
