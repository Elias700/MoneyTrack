
import type { InputHTMLAttributes } from "react";

interface InputToggleProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
}

export function InputToggle({ label, className = "", ...props }: InputToggleProps) {
    return (
        <label className="flex items-center gap-3 cursor-pointer">
            <input
                type="checkbox"
                className={`
                    h-5 w-10 appearance-none rounded-full
                    bg-gray-300
                    checked:bg-[var(--color-primary-300)]
                    relative cursor-pointer transition
                    before:content-['']
                    before:absolute before:top-0.5 before:left-0.5
                    before:h-4 before:w-4
                    before:bg-white before:rounded-full
                    before:transition
                    checked:before:translate-x-5
                    ${className}
                `}
                {...props}
            />
            {label && (
                <span className="text-sm text-[var(--color-primary-500)]">
                    {label}
                </span>
            )}
        </label>
    );
}
