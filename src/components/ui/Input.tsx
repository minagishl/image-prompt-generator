import { InputHTMLAttributes } from "react";

export function Input({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`flex-1 rounded-lg border border-gray-200/50 bg-white/95 backdrop-blur-sm px-4 py-3 text-gray-900 dark:border-gray-700/50 dark:bg-gray-800/90 dark:text-gray-100 transition-all duration-300 focus:border-orange-500/70 focus:ring-2 focus:ring-orange-500/20 ${className}`}
      {...props}
    />
  );
}

interface InputContainerProps {
  children: React.ReactNode;
}

export function InputContainer({ children }: InputContainerProps) {
  return (
    <div className="mx-auto w-full rounded-xl border bg-neutral-500/5 p-4 backdrop-blur border-neutral-900/[0.05] sticky bottom-0 mt-8">
      <div className="flex flex-col sm:flex-row w-full gap-4">{children}</div>
    </div>
  );
}
