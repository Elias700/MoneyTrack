import { Home, User, Clock3, Settings, PlusCircle, Folder } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom"; // Importado useLocation

export default function Sidebar() {
    
    return (
        // Mantenha as classes de layout
        <aside className="w-64 h-screen bg-(--color-primary-700) text-(--color-primary-50) p-6 flex flex-col">
            
            <h1 className="text-4xl font-bold mb-10"> 
                Money<span className="text-[#5BB6FF]">Track</span>
            </h1>

            <nav className="space-y-2">
                {/* Removida a propriedade 'active' fixa de todos os itens */}
                <SidebarItem icon={<Home size={25} />} label="Home" to="/" />
                <SidebarItem icon={<User size={25} />} label="Conta" to="/conta" />
                <SidebarItem icon={<Clock3 size={25} />} label="Histórico" to="/historico" />
                <SidebarItem icon={<Folder size={25} />} label="Categorias" to="/categories"/>
                <SidebarItem icon={<Settings size={25} />} label="Configurações" to="/configuracoes" />
                <SidebarItem icon={<PlusCircle size={25} />} label="Adicionar Gasto" to="/adicionar-gasto" />
            </nav>
        </aside>
    );
}

interface ItemProps {
    icon: React.ReactNode;
    label: string;
    // Removida a propriedade active, pois ela será calculada internamente
    to: string; 
}

function SidebarItem({ icon, label, to }: ItemProps) {
    const navigate = useNavigate();
    const location = useLocation(); // Obtém o objeto de localização atual
    
    // Determina se o item está ativo:
    // Compara o 'pathname' (ex: /categories) com o 'to' do item.
    // Usamos 'to === location.pathname' para rotas exatas.
    // Para a rota Home ('/'), podemos querer uma comparação exata.
    const isActive = to === location.pathname;

    // Removi as classes de cor que estavam com sintaxe incorreta (ex: bg-(--...))
    const baseClasses = "w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm transition-all duration-200 cursor-pointer";
    const activeClasses = "bg-(--color-primary-500) text-white"; // Cor de fundo para o item ativo
    const inactiveClasses = "hover:bg-(--color-primary-800) hover:duration-500 text-gray-300"; // Cores para o item inativo

    const handleClick = () => {
        navigate(to);
    };

    return (
        <button
            onClick={handleClick}
            // Usa isActive para aplicar as classes corretas
            className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
        >
            {icon}
            <span className="text-[1.1rem]">{label}</span>
        </button>
    );
}