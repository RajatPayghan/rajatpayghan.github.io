export function SectionContainer(props) {
  return (
    <div className='grid items-start gap-4 lg:gap-4 grid-cols-1' {...props} />
  );
}

export function SectionTitle(props) {
  return (
    <div
      className='lg:col-span-2 text-xl lg:text-normal text-neutral-500 pt-0 dark:text-neutral-500 font-instrument italic tracking-wide'
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
