'use client';

import { useRef, Children, cloneElement } from 'react';
import { motion, useInView } from 'framer-motion';

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  offset = 6,
  direction = 'down',
  inView = false,
  inViewMargin = '-50px',
  blur = '6px',
  stagger = 0.2, // Control spacing between animations
  ...props
}) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;

  const defaultVariants = {
    hidden: {
      [direction === 'left' || direction === 'right' ? 'x' : 'y']:
        direction === 'right' || direction === 'down' ? -offset : offset,
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      [direction === 'left' || direction === 'right' ? 'x' : 'y']: 0,
      opacity: 1,
      filter: `blur(0px)`,
    },
  };

  const combinedVariants = variant || defaultVariants;

  const childArray = Children.toArray(children);

  return (
    <div ref={ref} className={className} {...props}>
      {childArray.map((child, index) => (
        <motion.div
          key={index}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          exit='hidden'
          variants={combinedVariants}
          transition={{
            delay: delay + index * stagger,
            duration,
            ease: 'easeOut',
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
