// SERVER COMPONENT - Wraps pages with consistent BlurFade styling
import { BlurFade } from '@/components/BlurFade/blur-fade';

export function PageLayout({ children, stagger = 1 }) {
  return (
    <BlurFade stagger={stagger} className='writing-container'>
      {children}
    </BlurFade>
  );
}
