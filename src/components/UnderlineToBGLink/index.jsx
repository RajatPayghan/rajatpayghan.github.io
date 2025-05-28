'use client';

/*
 * Conponent imported from fancy components
 *
 * @usage : <UnderlineLinkWithBG label='Cool Underline Link' onClick={() => ()}
 * @Source : https://www.fancycomponents.dev/docs/components/text/underline-to-background
 */

import { useEffect, useRef } from 'react';
import { color, motion } from 'motion/react';
import { useTheme } from 'next-themes';

export default function UnderlineLinkWithBG({
  label,
  className,
  onClick,
  transition = { type: 'spring', damping: 30, stiffness: 300 },

  // Default to 10% of font size
  underlineHeightRatio = 0.1,

  // Default to 1% of font size
  underlinePaddingRatio = 0.01,

  targetTextColorLight = '#20f',
  targetTextColorDark = '#fef',
  targetBorderColorLight = 'bg-[#20f]',
  targetBorderColorDark = 'bg-[#8BFA4A]',
  ...props
}) {
  const textRef = useRef(null);
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

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
      backgroundColor: isDarkMode
        ? targetBorderColorDark
        : targetBorderColorLight,
      height: 'var(--underline-height)',
    },
    target: {
      backgroundColor: isDarkMode
        ? targetBorderColorDark
        : targetBorderColorLight,
      height: '100%',
      transition: transition,
    },
  };

  const textVariants = {
    initial: {
      color: 'currentColor',
    },
    target: {
      color: isDarkMode ? targetTextColorDark : targetTextColorLight,
      transition: transition,
    },
  };

  return (
    <motion.span
      className={`relative inline-block cursor-pointer ${className}`}
      whileHover='target'
      onClick={onClick}
      ref={textRef}
      {...props}
    >
      <motion.div
        className={`absolute ${targetBorderColorLight} dark:${targetBorderColorDark} w-full`}
        style={{
          height: 'var(--underline-height)',
          bottom: 'calc(-1 * var(--underline-padding))',
        }}
        variants={underlineVariants}
        aria-hidden='true'
      />
      <motion.span
        variants={textVariants}
        className='px-1 text-current relative'
      >
        {label}
      </motion.span>
    </motion.span>
  );
}
