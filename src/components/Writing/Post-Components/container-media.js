export default function MediaContainer({ children, caption }) {
  return (
    <div className='flex flex-col items-center justify-center md:px-24 md:py-8 w-full gap-2 md:gap-4'>
      {children}
      <span className='text-sm md:text-base w-fit text-neutral-400 dark:text-neutral-600'>
        {caption}
      </span>
    </div>
  );
}
