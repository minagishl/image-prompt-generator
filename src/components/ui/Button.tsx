import { ButtonHTMLAttributes } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { tv } from "tailwind-variants";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  icon?: boolean;
}

export function Button({
  children,
  variant = "primary",
  icon = false,
  className = "",
  ...props
}: ButtonProps) {
  const button = tv({
    base: "rounded-lg border border-gray-200/50 bg-white/95 backdrop-blur-sm transition-all duration-300 dark:border-gray-700/50 dark:bg-gray-800/90",
    variants: {
      variant: {
        primary:
          "px-4 py-3 text-sm font-medium text-gray-700 hover:border-orange-500/70 hover:bg-orange-50/50 dark:text-gray-300 dark:hover:border-orange-400/70 dark:hover:bg-orange-900/20",
        secondary:
          "px-3 py-1.5 text-sm font-medium text-gray-700 hover:border-orange-500/70 hover:bg-orange-50/50 dark:text-gray-300 dark:hover:bg-orange-900/20",
        danger:
          "text-sm text-gray-700 hover:border-red-500/70 hover:bg-red-50/50 dark:text-gray-300 dark:hover:border-red-400/70 dark:hover:bg-red-900/20",
      },
      icon: {
        true: "px-3.5 py-3.5",
        false: "px-4 py-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      icon: false,
    },
  });

  return (
    <button className={button({ variant, icon, className })} {...props}>
      {variant === "danger" && icon ? (
        <HiOutlineTrash className={icon ? "h-4 w-4" : "h-5 w-5"} />
      ) : (
        children
      )}
    </button>
  );
}

const buttonGroup = tv({
  base: "flex items-center gap-2",
});

interface ButtonGroupProps {
  children: React.ReactNode;
  className?: string;
}

export function ButtonGroup({ children, className = "" }: ButtonGroupProps) {
  return <div className={buttonGroup({ className })}>{children}</div>;
}

interface CategoryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

const categoryButton = tv({
  base: "flex w-full items-center justify-start rounded-md px-4 py-2.5 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-700",
  variants: {
    active: {
      true: "bg-orange-50 text-orange-600 dark:bg-gray-700 dark:text-orange-400",
      false: "text-gray-700 dark:text-gray-300",
    },
  },
  defaultVariants: {
    active: false,
  },
});

export function CategoryButton({
  active = false,
  className = "",
  children,
  ...props
}: CategoryButtonProps) {
  return (
    <button className={categoryButton({ active, className })} {...props}>
      {children}
    </button>
  );
}
