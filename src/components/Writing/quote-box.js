import { cn } from '@/constants/utils';

export default function QuoteBox({ children }) {
  return (
    <div
      className={cn(
        'w-full min-h-96 grid place-items-center rounded-2xl ',
        'border border-neutral-50 dark:border-neutral-900 '
      )}
    >
      <span className='!font-instrument italic text-center max-w-[80%]'>
        ------ {children} -----
      </span>
    </div>
  );
}
