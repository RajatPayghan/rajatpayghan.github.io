'use client';
import { useEffect, useState } from 'react';

export function useIsMobile(MOBILE_BREAKPOINT = 768) {
  const [isMobile, setIsMobile] = useState(undefined);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const onChange = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mql.matches);

    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [MOBILE_BREAKPOINT]);

  return !!isMobile;
}
