import { Home, User, Clock3, Settings, PlusCircle, Folder } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <aside
      className={`
        bg-(--color-primary-300)
        text-(--color-primary-50)

        w-full lg:w-64
        h-screen
        p-6 flex flex-col

        fixed top-0 left-0 z-50
        transform transition-transform duration-300

        ${isOpen ? "translate-x-0" : "-translate-x-full"}

        lg:static lg:translate-x-0
      `}
    >
      <h1 
        className="text-4xl font-bold mb-10 text-(--color-neutral-100)">
        Money<span className="text-[#5BB6FF]">Track</span>
      </h1>

      <nav className="space-y-2">
        <SidebarItem icon={<Home size={25} />} label="Home" to="/" onClose={onClose} />
        <SidebarItem icon={<User size={25} />} label="Conta" to="/account" onClose={onClose} />
        <SidebarItem icon={<Clock3 size={25} />} label="Histórico" to="/history" onClose={onClose} />
        <SidebarItem icon={<Folder size={25} />} label="Categorias" to="/categories" onClose={onClose} />
        <SidebarItem icon={<Settings size={25} />} label="Configurações" to="/settings" onClose={onClose} />
        <SidebarItem icon={<PlusCircle size={25} />} label="Adicionar Gasto" to="/addExpenses" onClose={onClose} />
      </nav>
    </aside>
  );
}

function SidebarItem({ icon, label, to, onClose }: ItemProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === to;

  const handleClick = () => {
    navigate(to);

    // Fecha o menu apenas no mobile
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        w-full 
        flex 
        items-center 
        gap-3 px-4 py-3 
        rounded-md
        transition-colors
        cursor-pointer
        ${isActive
          ? "bg-(--color-primary-400) text-white"
          : "text-gray-300 hover:bg-(--color-primary-800)"
        }
      `}
    >
      {icon}
      <span className="text-[1.1rem]">{label}</span>
    </button>
  );
}
