import { InputHTMLAttributes } from "react";
import { tv } from "tailwind-variants";

const input = tv({
  base: "flex-1 rounded-lg border border-gray-200/50 bg-white/95 backdrop-blur-sm px-4 py-2.5 text-gray-900 dark:border-gray-700/50 dark:bg-gray-800/90 dark:text-gray-100 transition-all duration-300 focus:border-orange-500/70 focus:ring-2 focus:ring-orange-500/20",
});

export function Input({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={input({ className })} {...props} />;
}

const inputContainerStyles = tv({
  base: "mx-auto w-full rounded-xl border bg-neutral-500/5 p-4 backdrop-blur border-neutral-900/[0.05] sticky bottom-0 mt-8",
});

const inputInnerStyles = tv({
  base: "flex flex-col sm:flex-row w-full gap-4",
});

interface InputContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function InputContainer({ children, className }: InputContainerProps) {
  return (
    <div className={inputContainerStyles({ className })}>
      <div className={inputInnerStyles()}>{children}</div>
    </div>
  );
}
