
import type { InputHTMLAttributes } from "react";
import type { ReactNode } from "react";

interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  variant?: "default" | "underline" | "settings";
}

export function InputBase({
  icon,
  variant = "default",
  className = "",
  ...props
}: InputBaseProps) {
  const baseStyle = `
    block w-full h-11
    text-base
    bg-[var(--color-neutral-200)]
    text-[var(--color-primary-500)]
    focus:outline-none
  `;

  const variants = {
    default: `
      rounded-lg border
      border-[var(--color-primary-300)]
      pl-12 pr-4
      focus:border-[var(--color-primary-500)]
    `,
    underline: `
      w-950
      border-0 
      border-b-2
      border-[var(--color-primary-300)]
      rounded-t-2xl
      pl-12 pr-3
      focus:border-[var(--color-primary-700)]
    `,
    settings: `
      rounded-lg border
      border-[var(--color-primary-300)]
      px-4
      focus:border-[var(--color-primary-500)]
    `,
  };

  return (
    <div className="relative w-full">
      {icon && (
        <span 
          className="
            absolute 
            left-4 
            top-1/2 -translate-y-1/2 
            text-[var(--color-desabled)]
          "
        >
          {icon}
        </span>
      )}

      <input
        className={`${baseStyle} ${variants[variant]} ${className}`}
        {...props}
      />
    </div>
  );
}
