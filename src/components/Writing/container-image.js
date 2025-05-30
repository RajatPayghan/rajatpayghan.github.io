import Image from 'next/image';

export default function BlogImage({ src, alt, width = 800, height = 600 }) {
  return (
    <div className='flex flex-col items-center gap-2 md:gap-4'>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className='rounded-lg border border-neutral-200 dark:border-neutral-700'
      />
      <span className='text-sm md:text-base w-fit text-neutral-400 dark:text-neutral-600'>
        {alt}
      </span>
    </div>
  );
}
