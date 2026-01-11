import { Menu } from "lucide-react";

interface HamburgerMenuProps {
    onClick: () => void;
}

export default function HamburgerMenu({ onClick }: HamburgerMenuProps) {
    return (
        <button
            onClick={onClick}
            aria-label="Open menu"
            className="
                lg:hidden
                p-2
                rounded-md
                cursor-pointer
                text-(--color-primary-300)
                hover:bg-(--color-primary-200)
                transition
                duration-300
            "
        >
            <Menu size={28} />
        </button>
    );
};
