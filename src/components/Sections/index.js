import { cn } from '@/constants/utils';
import { Newsreader } from 'next/font/google';

const libreBaskerville = Newsreader({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export function SectionContainer(props) {
  return (
    <div className='flex flex-col items-start gap-4 lg:gap-2' {...props} />
  );
}

export function SectionTitle(props) {
  return (
    <div
      className={cn(
        'w-full text-xl lg:text-normal text-neutral-400 pt-0 dark:text-neutral-500 italic tracking-wide',
        `${libreBaskerville.className}`,
        'italic'
      )}
      {...props}
    />
  );
}

export function SectionContent(props) {
  return <div className='w-full lg:flex-1 text-base lg:text-lg' {...props} />;
}
