import { useEffect } from 'react';

export function useDockItemHoverEffect() {
  useEffect(() => {
    const items = document.querySelectorAll('.dock-item');

    items.forEach((item) => {
      const textEl = item.querySelector('.dock-item-text');

      const handleMouseMove = (e) => {
        const rect = textEl.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const angle = Math.atan2(dy, dx);
        const distance = 1; // max 2px
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        textEl.style.transform = `translate(${x}px, ${y}px)`;
      };

      const handleMouseLeave = () => {
        textEl.style.transform = 'translate(0, 0)';
      };

      item.addEventListener('mousemove', handleMouseMove);
      item.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup
      return () => {
        item.removeEventListener('mousemove', handleMouseMove);
        item.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);
}
