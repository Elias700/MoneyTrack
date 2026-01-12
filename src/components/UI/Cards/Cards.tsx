import { X } from 'lucide-react';
import { ChevronRight } from "lucide-react";


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


//Cards Settings

export default interface SettingsCardProps {
    title: string;
    items: string[];
}

export function SettingsCard({ title, items }: SettingsCardProps) {
    return (
        <div
            className="
                rounded-xl
                bg-(--color-neutral-100)
                border
                border-(--color-neutral-200)
                shadow-sm
            "
        >
            
            <h3
                className="
                    px-6
                    py-4
                    text-(--color-neutral-200)
                    font-semibold
                    rounded-t-xl
                    border-b
                    border-(--color-primary-200)
                    bg-(--color-primary-300)
                "
            >
                {title}
            </h3>

            <ul>
                {items.map((item) => (
                    <li
                        key={item}
                        className="
                            px-6
                            py-4
                            flex
                            items-center
                            justify-between
                            text-(--color-primary-400)
                            hover:bg-(--color-primary-hover)
                            duration-300
                            cursor-pointer
                            transition
                        "
                    >
                        <span>{item}</span>
                        <ChevronRight size={18} className="text-(--color-primary-400)" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

