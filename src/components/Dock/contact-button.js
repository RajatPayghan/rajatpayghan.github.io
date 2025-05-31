import React from 'react';
import { MoveRight } from 'lucide-react';

export default function DockContactButton({}) {
  return (
    <a href='mailto:rajat.payghan@gmail.com' className='flex group'>
      <div className='dock-contact contact-hover'>
        <span className='dock-item-text'>
          <span>Send Email</span>
        </span>
        <MoveRight size={12} />
      </div>
      <div className='dock-contact contact-default'>
        <span className='dock-item-text'>Let's Talk</span>
      </div>
    </a>
  );
}
