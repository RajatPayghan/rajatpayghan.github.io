/*
 * Component imported from fancy components
 *
 * @usage : <UnderlineLinkWithBG label='Cool Underline Link' onClick={() => ()}
 * @Source : https://www.fancycomponents.dev/docs/components/text/underline-to-background
 */

'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';

const UnderlineToBackground = ({
  label,
  className,
  onClick,
  transition = { type: 'spring', damping: 30, stiffness: 300 },
  underlineHeightRatio = 0.1,
  underlinePaddingRatio = 0.01,
  ...props
}) => {
  const textRef = useRef(null);
  const { theme } = useTheme();

  // Define text and underline colors based on theme
  const themeColors = {
    light: {
      text: '#1a1a1a',
      underline: '#8bfa4a',
    },
    dark: {
      text: '#1a1a1a',
      underline: '#8BFA4A',
    },
  };

  const activeColors = themeColors[theme] || themeColors.light;

  useEffect(() => {
    const updateUnderlineStyles = () => {
      if (textRef.current) {
        const fontSize = parseFloat(getComputedStyle(textRef.current).fontSize);
        const underlineHeight = fontSize * underlineHeightRatio;
        const underlinePadding = fontSize * underlinePaddingRatio;

        textRef.current.style.setProperty(
          '--underline-height',
          `${underlineHeight}px`
        );
        textRef.current.style.setProperty(
          '--underline-padding',
          `${underlinePadding}px`
        );
      }
    };

    updateUnderlineStyles();
    window.addEventListener('resize', updateUnderlineStyles);

    return () => window.removeEventListener('resize', updateUnderlineStyles);
  }, [underlineHeightRatio, underlinePaddingRatio]);

  const underlineVariants = {
    initial: {
      height: 'var(--underline-height)',
    },
    target: {
      height: '100%',
      transition: transition,
    },
  };

  const textVariants = {
    initial: {
      color: 'currentColor',
    },
    target: {
      color: activeColors.text,
      transition: transition,
    },
  };

  return (
    <motion.span
      className={`relative inline-block cursor-pointer ${className}`}
      whileHover='target'
      onClick={onClick}
      // Removed key={theme} - this was causing the component to remount
      ref={textRef}
      {...props}
    >
      <motion.div
        className='absolute w-full'
        style={{
          backgroundColor: activeColors.underline,
          height: 'var(--underline-height)',
          bottom: 'calc(-1 * var(--underline-padding))',
        }}
        variants={underlineVariants}
        // Add animate prop to smoothly transition background color on theme change
        animate={{
          backgroundColor: activeColors.underline,
        }}
        transition={transition}
        aria-hidden='true'
      />
      <motion.span
        variants={textVariants}
        className='text-current p-1 relative'
        // Add animate prop to smoothly transition text color on theme change
        animate={{
          color: 'currentColor', // This will use the CSS currentColor which should update with theme
        }}
        transition={transition}
      >
        {label}
      </motion.span>
    </motion.span>
  );
};

export default UnderlineToBackground;
