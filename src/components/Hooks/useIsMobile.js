'use client';

import { useEffect, useState } from 'react';

export function useIsMobile(MOBILE_BREAKPOINT = 768) {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const onChange = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mql.matches); // Set initial value on mount
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [MOBILE_BREAKPOINT]);

  return isMobile;
}
