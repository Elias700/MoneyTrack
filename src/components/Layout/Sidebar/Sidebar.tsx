

import { Home, User, Clock3, Settings, PlusCircle, Folder } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-[#153B6B] text-white p-6 flex flex-col border-r border-white/10">
      {/* Logo */}
      <h1 className="text-2xl font-bold mb-10">
        Money<span className="text-[#5BB6FF]">Track</span>
      </h1>

      {/* Menu */}
      <nav className="space-y-2">
        <SidebarItem icon={<Home size={18} />} label="Home" active />
        <SidebarItem icon={<User size={18} />} label="Conta" />
        <SidebarItem icon={<Clock3 size={18} />} label="Histórico" />
        <SidebarItem icon={<Folder size={18} />} label="Categorias" />
        <SidebarItem icon={<Settings size={18} />} label="Configurações" />
        <SidebarItem icon={<PlusCircle size={18} />} label="Adicionar Gasto" />
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
        ${active ? "bg-[#1E5AA8]" : "hover:bg-white/10"}
      `}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
