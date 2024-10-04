
export function SectionContainer(props) {
  return (
    <div
      className="grid items-start gap-8 grid-cols-12"
      {...props}
    />
  )
}

// col-span-2 pt-8 text-3xl font-extrabold text-neutral-950 dark:text-white md:pt-0 md:text-right md:text-base md:font-normal md:text-opacity-40

export function SectionTitle(props) {
  return (
    <div
      className="col-span-2 text-normal text-neutral-500 pt-0 text-right"
      {...props}
    />
  )
}

export function SectionContent(props) {
  return <div className="col-span-10 text-lg font-thin text-neutral-800" {...props} />
}
