export function SectionContainer(props) {
  return (
    <div
      className='grid items-start gap-4 lg:gap-8 grid-cols-1 lg:grid-cols-12'
      {...props}
    />
  );
}

export function SectionTitle(props) {
  return (
    <div
      className='lg:col-span-2 text-sm lg:text-normal text-neutral-500 pt-0 lg:text-right dark:text-neutral-600'
      {...props}
    />
  );
}

export function SectionContent(props) {
  return (
    <div
      className='lg:col-span-10 text-base lg:text-lg font-thin text-neutral-800 dark:text-neutral-400'
      {...props}
    />
  );
}
