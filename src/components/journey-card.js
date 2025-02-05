import dynamic from 'next/dynamic'


export const JourneyCard = ({ title, description, year }) => (
  <div className="word-break-word flex flex-col">
    <span className="font-semibold tracking-tight">{title}</span>
    {description && <div className="text-sm">{description}</div>}
  </div>
)
