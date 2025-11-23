import { X } from 'lucide-react';

interface ItemData {
  label: string;
  value: string;
  details?: string;
}

interface CardProps {
  title?: string;
  icon?: React.ReactNode;
  items?: ItemData[];
  total?: string;
  isActive?: boolean;
  onClose?: () => void;
}

export function Card({ 
  title = "", 
  icon, 
  items = [], 
  total = "", 
  isActive = false, 
  onClose 
}: CardProps) {
  return (
    <div 
      className={`
        relative
        bg-(--color-primary-10)
        rounded-xl
        shadow-md
        p-6
        w-80
        flex
        flex-col
        justify-between
        border-2
        ${isActive ? 'border-(--color-primary-900)' : 'border-gray-200'}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {icon && icon}
          <h3 className="text-xl font-semibold text-(--color-primary-500)">
            {title}
          </h3>
        </div>

        {onClose && (
          <button 
            onClick={onClose} 
            className="text-(--color-primary-200) hover:text-(--color-error)"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Items */}
      <div className="mb-4">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="mb-2 last:mb-0">
              <p className="text-(--color-primary-800) font-medium">
                {item.label}
              </p>
              <p className="text-(--color-primary-200) text-sm">
                {item.value}
                {item.details && (
                  <span className="ml-1 text-(--color-primary-200) text-xs">
                    {item.details}
                  </span>
                )}
              </p>
            </div>
          ))
        ) : (
          <p className="text-(--color-primary-200) text-sm italic">
            Nenhum item disponível
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="mt-auto pt-4 border-t border-(--color-primary-500) text-right">
        <p className="text-lg font-bold text-(--color-primary-900)">
          {total ? `Total ${total}` : "—"}
        </p>
      </div>
    </div>
  );
}
