import { FileText, ScrollText, Sparkles, StickyNote } from 'lucide-react';

export default function PostIcon({ type, isFeatured, className }) {
  if (isFeatured)
    return (
      <Sparkles className='size-3 md:size-4 stroke-none dark:stroke-inherit fill-yellow-500 dark:fill-amber-400 md:mr-2 mt-1 md:mt-0' />
    );

  switch (type) {
    case 'note':
      return <StickyNote className='size-3 md:size-4 md:mr-2 mt-1 md:mt-0' />;
      break;

    case 'post':
      return <FileText className='size-3 md:size-4 md:mr-2 mt-1 md:mt-0' />;
      break;

    case 'essay':
      return <ScrollText className='size-3 md:size-4 md:mr-2 mt-1 md:mt-0' />;
      break;

    default:
      return <FileText className='size-3 md:size-4 md:mr-2 mt-1 md:mt-0' />;
      break;
  }
}
