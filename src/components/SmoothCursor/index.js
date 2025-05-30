'use client';

import { motion, useSpring } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '../Hooks/useIsMobile';

const DefaultCursorSVG = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={50}
      height={54}
      viewBox='0 0 50 54'
      fill='none'
      style={{ scale: 0.4 }}
    >
      <g filter='url(#filter0_d_91_7928)'>
        <path
          d='M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z'
          fill='black'
        />
        <path
          d='M43.7146 40.6933L28.5431 6.34306C27.3556 3.65428 23.5772 3.69516 22.3668 6.32755L6.57226 40.6778C5.3134 43.4156 7.97238 46.298 10.803 45.2549L24.7662 40.109C25.0221 40.0147 25.2999 40.0156 25.5494 40.1082L39.4193 45.254C42.2261 46.2953 44.9254 43.4347 43.7146 40.6933Z'
          stroke='white'
          strokeWidth={2.25825}
        />
      </g>
      <defs>
        <filter
          id='filter0_d_91_7928'
          x={0.602397}
          y={0.952444}
          width={49.0584}
          height={52.428}
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy={2.25825} />
          <feGaussianBlur stdDeviation={2.25825} />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_91_7928'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_91_7928'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
};

const PointerCursorSVG = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={50}
      height={54}
      viewBox='0 0 50 54'
      fill='none'
      style={{ scale: 0.4 }}
    >
      <g filter='url(#filter0_d_pointer)'>
        <circle cx='25' cy='27' r='12' fill='black' />
        <circle cx='25' cy='27' r='10' stroke='white' strokeWidth={2} />
      </g>
      <defs>
        <filter
          id='filter0_d_pointer'
          x='0'
          y='0'
          width='50'
          height='54'
          filterUnits='userSpaceOnUse'
        >
          <feDropShadow dx='0' dy='2' stdDeviation='2' floodOpacity='0.2' />
        </filter>
      </defs>
    </svg>
  );
};

export default function SmoothCursor({
  springConfig = {
    damping: 28,
    stiffness: 400,
    mass: 0.5,
    restDelta: 0.001,
  },
}) {
  const [isMoving, setIsMoving] = useState(false);
  const [isPointer, setIsPointer] = useState(false); // 🔥 track pointer state
  const lastMousePos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const lastUpdateTime = useRef(Date.now());
  const previousAngle = useRef(0);
  const accumulatedRotation = useRef(0);

  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);
  const rotation = useSpring(0, {
    ...springConfig,
    damping: 20,
    stiffness: 500,
    mass: 0.5,
  });
  const scale = useSpring(1, {
    ...springConfig,
    stiffness: 600,
    damping: 30,
    mass: 0.4,
  });

  useEffect(() => {
    const updateVelocity = (currentPos) => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastUpdateTime.current;

      if (deltaTime > 0) {
        velocity.current = {
          x: (currentPos.x - lastMousePos.current.x) / deltaTime,
          y: (currentPos.y - lastMousePos.current.y) / deltaTime,
        };
      }

      lastUpdateTime.current = currentTime;
      lastMousePos.current = currentPos;
    };

    const smoothMouseMove = (e) => {
      const currentPos = { x: e.clientX, y: e.clientY };
      updateVelocity(currentPos);

      const speed = Math.sqrt(
        velocity.current.x ** 2 + velocity.current.y ** 2
      );

      cursorX.set(currentPos.x);
      cursorY.set(currentPos.y);

      if (speed > 0.1) {
        const currentAngle =
          Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI) +
          90;

        let angleDiff = currentAngle - previousAngle.current;
        if (angleDiff > 180) angleDiff -= 360;
        if (angleDiff < -180) angleDiff += 360;
        accumulatedRotation.current += angleDiff;
        rotation.set(accumulatedRotation.current);
        previousAngle.current = currentAngle;

        scale.set(0.95);
        setIsMoving(true);

        const timeout = setTimeout(() => {
          scale.set(1);
          setIsMoving(false);
        }, 150);

        return () => clearTimeout(timeout);
      }
    };

    const throttledMouseMove = (e) => {
      requestAnimationFrame(() => smoothMouseMove(e));
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"]')) {
        setIsPointer(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, [role="button"]')) {
        setIsPointer(false);
      }
    };

    document.body.style.cursor = 'none';
    window.addEventListener('mousemove', throttledMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      document.body.style.cursor = 'auto';
    };
  }, [cursorX, cursorY, rotation, scale]);

  const activeCursor = isPointer ? <PointerCursorSVG /> : <DefaultCursorSVG />;

  const isDesktop = !useIsMobile();

  return (
    <>
      {isDesktop ? (
        <motion.div
          style={{
            position: 'fixed',
            left: cursorX,
            top: cursorY,
            translateX: '-50%',
            translateY: '-50%',
            rotate: rotation,
            scale: scale,
            zIndex: 100,
            pointerEvents: 'none',
            willChange: 'transform',
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 30,
          }}
        >
          {activeCursor}
        </motion.div>
      ) : (
        <></>
      )}
    </>
  );
}
