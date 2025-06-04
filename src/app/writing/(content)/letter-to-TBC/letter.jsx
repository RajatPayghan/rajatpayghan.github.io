import React from 'react';

export default function Letter({ children }) {
  return (
    <div className='flex items-center justify-center h-fit p-8'>
      <div className='relative'>
        <div className='absolute inset-0 bg-neutral-400 dark:bg-neutral-600 opacity-20 rounded-sm transform rotate-2 translate-x-1 translate-y-1'></div>

        <div className='relative bg-neutral-50 dark:bg-neutral-800 p-8 md:p-12 max-w-2xl shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300 ease-in-out border border-neutral-200 dark:border-neutral-700'>
          <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-600 to-transparent opacity-50'></div>

          <div className='relative'>
            <pre className='font-sans text-neutral-800 dark:text-neutral-200 leading-relaxed whitespace-pre-wrap text-xs md:text-lg'>
              {children}
            </pre>
          </div>

          <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-600 to-transparent opacity-50'></div>

          <div className='absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none'>
            <div className='w-full h-full bg-gradient-to-br from-neutral-600 via-transparent to-neutral-600'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
