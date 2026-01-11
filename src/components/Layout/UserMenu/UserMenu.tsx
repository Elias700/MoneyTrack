import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";

type Opcao = {
  label: string;
  value: "login" | "cadastro" | "settings";
};

export default function UserMenu() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const iconRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const opcoes: Opcao[] = [
    { label: "Ir para Login", value: "login" },
    { label: "Ir para Cadastro", value: "cadastro" },
    { label: "Configurações", value: "settings" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        iconRef.current &&
        !iconRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleOptionClick = (value: Opcao["value"]) => {
    setIsOpen(false);

    if (value === "login") navigate("/login");
    if (value === "cadastro") navigate("/cadastro");
    if (value === "settings") navigate("/settings");
  };

  return (
    <div className="relative">
      <div
        ref={iconRef}
        onClick={() => setIsOpen(prev => !prev)}
        className="
            cursor-pointer text-(--color-primary-300) 
            hover:text-(--color-primary-400) transition
        "
      >
        <User size={30} />
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          className="
            absolute top-full right-0 z-50 mt-2
            p-2 min-w-max
            bg-(--color-primary-100)
            border border-(--color-primary-300)
            rounded shadow-lg
            flex flex-col
        "
        >
          {opcoes.map(opcao => (
            <button
              key={opcao.value}
              onClick={() => handleOptionClick(opcao.value)}
              className="
                px-4 py-2 text-left
                text-(--color-primary-300)
                hover:text-(--color-neutral-100)
                hover:bg-(--color-primary-300)
                transition
                cursor-pointer
            "
            >
              {opcao.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
