import React, { useEffect, useRef, useState } from 'react';
import Matter, { Events } from 'matter-js';

const Circle = () => {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const [circles, setCircles] = useState([]);
  const [circlePositions, setCirclePositions] = useState([]);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    const { Engine, Render, Runner, Common, MouseConstraint, Mouse, Composite, Bodies } = Matter;

    const engine = Engine.create({
      enableSleeping: false,
    });

    const world = engine.world;
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;

    const render = Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        width: wrapper.clientWidth,
        height: wrapper.clientHeight,
        background: 'transparent',
        wireframes: false,
      },
    });

    Render.run(render);

    const runner = Runner.create();
    Runner.run(runner, engine);
    
    const text = ['React', 'C#', 'JavaScript', 'Python', 'Java', 'Node.js', 'SQL', 'Laravel', 'CSS', 'C', 'HTML', 'Tailwind', 'R']
    const createCircles = () => {
      const circles = [];
      const numCircles = text.length; // Use the number of imported images
      let circlesLoaded = 0;

      const addCirclesToComposite = () => {
        if (circlesLoaded === numCircles) {
          circles.forEach(circle => Composite.add(world, circle));
        }
      };

      for (let i = 0; i < numCircles; i++) {
        const x = Common.random(0, wrapper.clientWidth);
        const y = Common.random(0, wrapper.clientHeight);

        const maxWidth = wrapper.clientWidth * 0.1;
        const maxHeight = wrapper.clientHeight * 0.1;
        const circleRadius = Math.min(maxWidth, maxHeight) * 1;

        const circle = Bodies.circle(x, y, circleRadius, {
          render: {
            fillStyle: 'rgba(255, 255, 255, 0.4)',
            lineWidth: 2,
            strokeStyle: 'rgba(0, 0, 0, 0.6)',
            keepStatic: true,
          },
          text: {
            content: text[i],
            style: {
              color: 'black',
              font: isMobile?'8px Arial':'16px Arial',
              textAlign: 'center',
            },
          },
        });

        circles.push(circle);
        circlesLoaded++;
        addCirclesToComposite();
      }

      return circles;
    };

    const updateCirclePositions = () => {
      const positions = circles.map(circle => ({
        x: circle.position.x - circle.circleRadius,
        y: circle.position.y - circle.circleRadius,
      }));
      setCirclePositions(positions);
    };

    const circles = createCircles();
    setCircles(circles);

    Composite.add(world, [
      
      Bodies.rectangle(wrapper.clientWidth / 2, 0, wrapper.clientWidth, 50, { isStatic: true, render: { fillStyle: 'transparent',
      strokeStyle: 'black',
      lineWidth: 2  } }),
      Bodies.rectangle(wrapper.clientWidth / 2, wrapper.clientHeight, wrapper.clientWidth, 50, { isStatic: true, render: { fillStyle: 'transparent',
      strokeStyle: 'black',
      lineWidth: 2  } }),
      Bodies.rectangle(wrapper.clientWidth, wrapper.clientHeight / 2, 50, wrapper.clientHeight, { isStatic: true, render: { fillStyle: 'transparent',
      strokeStyle: 'black',
      lineWidth: 2  } }),
      Bodies.rectangle(0, wrapper.clientHeight / 2, 50, wrapper.clientHeight, { isStatic: true, render: { fillStyle: 'transparent',
      strokeStyle: 'black',
      lineWidth: 2 } }),

    ]);
 

    const mouse = Mouse.create(canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    Composite.add(world, mouseConstraint);
    render.mouse = mouse;

    const resizeCanvas = () => {
      canvas.width = wrapper.clientWidth;
      canvas.height = wrapper.clientHeight;

      Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: wrapper.clientWidth, y: wrapper.clientHeight },
      });
    };

    window.addEventListener('resize', resizeCanvas);

    Events.on(engine, 'afterUpdate', updateCirclePositions);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      Render.stop(render);
      Runner.stop(runner);
      Events.off(engine, 'afterUpdate', updateCirclePositions);
    };
  }, []);

  return (
    <div ref={wrapperRef} className='w-2/4 h-2/4  relative' >
      <canvas ref={canvasRef} className='w-full h-full' />
      {circles.map((circle, index) => (
        <div
          key={index}
      
          style={{
            position: 'absolute',
            left: circlePositions[index]?.x || 0,
            top: circlePositions[index]?.y || 0,
            width: circle.circleRadius * 2,
            height: circle.circleRadius * 2,
            borderRadius: '50%',
            pointerEvents:  'none',
          }}
         
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: circle.text.style.color,
              fontFamily: circle.text.style.font.split(' ')[0],
              fontSize: circle.text.style.font.split(' ')[0],
              textAlign: 'center',
              width: '100%',
              height: '100%',
            }}
        
          >
            {circle.text.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Circle;
