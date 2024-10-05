import React from "react"

function TableRow({ href, title, subtitle, date }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 group"
    >
      <strong className="line-clamp-2 font-medium text-gray-1000 group-hover:text-neutral-600 group-hover:underline group-hover:bg-neutral-100">
        {title}
      </strong>
      <span className="hidden sm:flex flex-1 border-t border-gray-300 border-dashed shrink dark:border-gray-800" />
      {subtitle && <span className="flex-none text-sm text-neutral-500">{subtitle}</span>}
      {date && (
        <span className="flex-none font-mono text-sm text-neutral-800">{date}</span>
      )}
    </a>
  )
}

export default TableRow