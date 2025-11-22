

import { Home, User, Clock3, Settings, PlusCircle, Folder } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-(--color-primary-700) text-(--color-primary-50) p-6 flex flex-col">
      {/* Logo */}
      <h1 className="text-4xl font-bold mb-15">
        Money<span className="text-[#5BB6FF]">Track</span>
      </h1>

      {/* Menu */}
      <nav className="space-y-2">
        <SidebarItem icon={<Home size={25} />} label="Home" active />
        <SidebarItem icon={<User size={25} />} label="Conta" />
        <SidebarItem icon={<Clock3 size={25} />} label="Histórico" />
        <SidebarItem icon={<Folder size={25} />} label="Categorias" />
        <SidebarItem icon={<Settings size={25} />} label="Configurações" />
        <SidebarItem icon={<PlusCircle size={25} />} label="Adicionar Gasto"/>
      </nav>
    </aside>
  );
}

interface ItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

function SidebarItem({ icon, label, active = false }: ItemProps) {
  return (
    <button
      className={`
        w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm
        transition-all duration-200 cursor-pointer
        ${active ? "bg-(--color-primary-800)" : "hover:bg-(--color-primary-500) hover:duration-500"}
      `}
    >
      {icon}
      <span className="text-[1.1rem]">{label}</span>
    </button>
  );
}
