import React, { ReactNode } from 'react'

interface ComponentCardProps {
  title: string;
  children: ReactNode;
  className?: string;
  count?: number;
  desc?: string;
}

const ComponentCard:React.FC<ComponentCardProps> = ({title, children, className="", count = "0", desc=""}) => {
  return (
    <div className={`rounded-2xl border border-gray-800 bg-white/[0.03] ${className}`}>

      {/* Card Header */}
      <div className="px-6 py-5">
        <h3 className="text-base font-medium text-white/90">
          {title} {count ? `(${count})` : null}
        </h3>
        {desc ?
          <p className="mt-1 text-sm text-gray-400">{desc}</p>
        : null}
      </div>

      {/* Card Body */}
      <div className="p-4 border-t border-gray-800 sm:p-6">
        <div className="space-y-6">{children}</div>
      </div>
    </div>
  )
}

export default ComponentCard