import { cn } from '@/lib/utils';
import { Newsreader } from 'next/font/google';
const libreBaskerville = Newsreader({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export function SectionContainer(props) {
  return (
    <div className='grid items-start gap-2 lg:gap-2 grid-cols-1' {...props} />
  );
}

export function SectionTitle(props) {
  return (
    <div
      className={cn(
        'lg:col-span-2 text-xl lg:text-normal text-neutral-400 pt-0 dark:text-neutral-500 italic tracking-wide',
        `${libreBaskerville.className}`,
        'italic'
      )}
      {...props}
    />
  );
}

export function SectionContent(props) {
  return (
    <div className='lg:col-span-10 text-base lg:text-lg font-thin' {...props} />
  );
}
