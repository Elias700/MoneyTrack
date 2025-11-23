

import { X, Play } from 'lucide-react'; // Importe os ícones que você usará

interface ItemData {
  label: string;
  value: string;
  details?: string;
}

interface CardProps {
  title: string;
  icon: React.ReactNode; // Passamos o ícone como um nó React (ex: <Play size={24} />)
  items: ItemData[]; // Array de itens para o corpo do card
  total: string;
  isActive?: boolean;
  onClose?: () => void;
}

export function Card({ title, icon, items, total, isActive = false, onClose }: CardProps) {
  return (
    <div 
      className={`
        relative 
        bg-white 
        rounded-xl 
        shadow-md 
        p-6 
        w-80 
        flex 
        flex-col 
        justify-between 
        border-2 
        ${isActive ? 'border-blue-500' : 'border-gray-200'}
      `}
    >
      {/* HEADER (Título e Botão X) */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-gray-800">
          {icon}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-gray-400 hover:text-red-500 transition-colors">
            <X size={18} />
          </button>
        )}
      </div>

      {/* BODY (Lista de Itens) */}
      <div className="mb-4">
        {items.map((item, index) => (
          // Use um índice ou ID único para a chave
          <div key={index} className="mb-2 last:mb-0">
            <p className="text-gray-700 font-medium">{item.label}</p>
            <p className="text-gray-600 text-sm">
              {item.value} 
              {item.details && <span className="ml-1 text-gray-500 text-xs">{item.details}</span>}
            </p>
          </div>
        ))}
      </div>

      {/* FOOTER (Total) */}
      <div className="mt-auto pt-4 border-t border-gray-200 text-right">
        <p className="text-lg font-bold text-blue-700">
          Total {total}
        </p>
      </div>
    </div>
  );
}

