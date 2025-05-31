export default function QuoteBox({ text, subtext }) {
  return (
    <span className=' w-full flex flex-col items-center gap-8 my-8'>
      <div className='w-32 h-px bg-neutral-100 dark:bg-neutral-800/50' />
      <span className='md:w-[80%] font-hanken text-lg md:text-xl italic text-center'>
        {text}
      </span>
      {subtext && (
        <span className='font-hanken text-xs md:text-sm text-center text-neutral-400 dark:text-neutral-600'>
          {subtext}
        </span>
      )}
      <div className='w-32 h-px bg-neutral-100 dark:bg-neutral-800/50' />
    </span>
  );
}
