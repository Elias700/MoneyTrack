
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "success" | "danger" | "outline";
    size?: "sm" | "md" | "lg";
    full?: boolean;
    children: ReactNode;
}

export function Button({
    variant = "primary",
    size = "md",
    full = false,
    className = "",
    children,
    ...props
}: ButtonProps) {
    const base = `
    rounded-lg font-medium transition cursor-pointer
    focus:outline-none
  `;

    const variants = {
        primary: `
      bg-(--color-primary-300)
      text-(--color-neutral-200)
      hover:bg-(--color-primary-400)
    `,
        success: `
      bg-(--color-success)
      text-(--color-neutral-200)
      hover:bg-(--color-success-hover)
    `,
        danger: `
      bg-(--color-error)
      text-(--color-neutral-100)
      hover:bg-(--color-error-hover)
    `,
        outline: `
      border border-(--color-primary-300)
      text-(--color-primary-300)
      hover:bg-(--color-primary-300)
      hover:text-white
    `,
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-2 text-sm",
        lg: "px-6 py-3 text-base",
    };

    return (
        <button
            className={`
        ${base}
        ${variants[variant]}
        ${sizes[size]}
        ${full ? "w-full" : ""}
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    );
}




