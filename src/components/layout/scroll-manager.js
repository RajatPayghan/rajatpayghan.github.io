// components/layout/scroll-manager.jsx
'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { FEATURE_FLAGS } from '@/lib/feature-flags';

export default function ScrollManager({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(
      () => setIsLoading(false),
      FEATURE_FLAGS.loading.loadingSecDelay * 1000
    );
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='app-shell'>
      <main
        className={cn(
          `scrollable-content`,
          `${isLoading ? 'overflow-hidden' : 'overflow-auto'}`
        )}
      >
        {children}
      </main>
    </div>
  );
}
