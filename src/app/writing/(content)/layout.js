import React from 'react';
import BackButton from './back-button';

export default function WritingLayout({ children }) {
  return (
    <div className='relative'>
      <BackButton />
      <div className='relative'>{children}</div>
    </div>
  );
}
