import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import UserMenu from "../UserMenu/UserMenu";

interface HeaderProps {
  onOpenSidebar: () => void;
}

export default function Header({ onOpenSidebar }: HeaderProps) {
  return (
    <header className="flex items-center justify-between p-4 bg-(--color-neutral-100)">
      <div className="sm:hidden">
        <HamburgerMenu onClick={onOpenSidebar} />
      </div>

      <div className="hidden sm:block">
        <HamburgerMenu onClick={onOpenSidebar} />
      </div>

      <div className="flex items-center gap-3">
        <span className="hidden sm:block text-lg font-medium text-(--color-primary-300)">
          Elias Ribeiro
        </span>
          <UserMenu />
      </div>
    </header>
  );
}
