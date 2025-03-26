import { ButtonHTMLAttributes } from 'react'

interface CardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <button
      className={`group flex h-auto w-full items-center rounded-lg border border-gray-200/50 bg-white/95 p-4 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/70 hover:bg-orange-50/50 active:scale-[0.98] ${className}`}
      {...props}
    >
      <span className="font-medium text-gray-900 transition-all duration-300 group-hover:text-orange-600">
        {children}
      </span>
    </button>
  )
}
