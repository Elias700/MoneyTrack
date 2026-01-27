import type { ReactNode, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";

interface AccountItemProps {
    icon: ReactNode;
    label: string;
    to: string;
    variant?: "default" | "danger";
}

export const AccountItem = ({
    icon,
    label,
    to,
    variant = "default",
}: AccountItemProps) => {
    const navigate = useNavigate();

    
    const handleNavigate = () => {
        navigate(to);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLLIElement>) => {
        if (event.key === "Enter") {
            handleNavigate();
        }
    };

    return (
        <li
            role="button"
            tabIndex={0}
            onClick={handleNavigate}
            onKeyDown={handleKeyDown}
            className={`
                p-5
                flex
                items-center 
                gap-4 
                cursor-pointer
                transition-colors
                hover:bg-(--color-primary-250)
                    ${variant === "danger"
                        ? "text-(--color-error)"
                        : "text-(--color-primary-300)"
                    }
            `}
        >
            <span className="text-2xl">
                {icon}
            </span>

            <span className="flex-1 font-medium">
                {label}
            </span>
        </li>
    );
};
