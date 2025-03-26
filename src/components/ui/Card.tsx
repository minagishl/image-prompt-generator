import { ButtonHTMLAttributes } from "react";

interface CardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <button
      className={`group flex h-auto w-full items-center rounded-lg border border-gray-200/50 bg-white/95 backdrop-blur-sm p-4 transition-all duration-300 hover:border-orange-500/70 hover:bg-orange-50/50 active:scale-[0.98] dark:border-gray-700/50 dark:bg-gray-800/90 dark:hover:border-orange-400/70 dark:hover:bg-orange-900/20 ${className}`}
      {...props}
    >
      <span className="font-medium text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-all duration-300">
        {children}
      </span>
    </button>
  );
}
