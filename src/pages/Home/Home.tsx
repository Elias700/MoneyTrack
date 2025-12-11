import { useState, useRef, useEffect } from "react"; 
import type { MouseEvent } from "react";
import { BtnViewDetails } from "../../components/UI/Buttons/Buttons";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";

type Opcao = {
  label: string;
  value: string;
};

const Home = () => {
  const navigate = useNavigate();

  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const opcoes: Opcao[] = [
    { label: "Ir para Login", value: "login" },
    { label: "Ir para Cadastro", value: "cadastro" },
    { label: "Configurações", value: "settings" },
  ];

  const menuRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {

      if (
        isSelectOpen &&
        menuRef.current && !menuRef.current.contains(event.target as Node) &&
        iconRef.current && !iconRef.current.contains(event.target as Node)
      ) {
        setIsSelectOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSelectOpen]);

  const toggleSelect = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    setIsSelectOpen(prev => !prev);
  };

  const handleOptionClick = (value: string): void => {
    setIsSelectOpen(false);

    if (value === "login") {
      navigate("/login");
    } else if (value === "cadastro") {
      navigate("/cadastro");
    } else if (value === "settings") {
      navigate("/settings");
    }
  };


  return (
    <main className="flex-1 w-full bg-(--color-neutral-100) p-10 overflow-y-auto">

      <div className="flex justify-between items-start">
        <h1 className="text-5xl font-bold leading-tight text-(--color-primary-300)">
          Resumo do mês <br /> de Novembro
        </h1>

        <div className="text-right flex gap-10 relative items-center">
          <p className="text-2xl font-medium text-(--color-primary-300)">Elias Ribeiro</p>

          <div
            ref={iconRef}
            onClick={toggleSelect}
            className="text-2xl cursor-pointer text-(--color-primary-500) hover:text-(--color-primary-300)"
          >
            <User size={30} />
          </div>

          {isSelectOpen && (
            <div
              ref={menuRef}
              className="absolute top-full right-0 z-10 p-2 border border-(--color-primary-200) rounded shadow-lg bg-(--color-primary-100) mt-1 min-w-max flex flex-col items-stretch"
            >
              {opcoes.map((opcao) => (
                <p
                  key={opcao.value}
                  onClick={() => handleOptionClick(opcao.value)}
                  className="px-4 py-2 text-(--color-primary-300) hover:text-(--color-neutral-100) cursor-pointer hover:bg-(--color-desabled) transition-colors duration-150"
                >
                  {opcao.label}
                </p>
              ))}
            </div>
          )}

        </div>
      </div>

      <section className="mt-20">
        <div className="w-64 p-6 bg-(--color-primary-10) rounded-xl shadow-2xl">
          <h2 className="text-lg font-medium text-(--color-primary-300)">Total de gastos</h2>
          <p className="text-4xl font-bold mt-2 text-(--color-primary-400)">
            R$ 2.500
          </p>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-semibold mb-5 text-(--color-primary-300)">Categorias</h2>

        <div className="flex gap-6 flex-wrap items-stretch">

          <div
            className="w-60 p-6 bg-(--color-primary-10) rounded-xl shadow-2xl flex flex-col justify-between h-full"
            onClick={() => navigate("/categories")}
          >
            <div>
              <h3 className="text-lg font-medium text-(--color-primary-400)">Streaming</h3>
              <p className="text-(--color-primary-300) mt-1">R$ 150,00</p>
            </div>

            <div className="mt-4">
              <BtnViewDetails />
            </div>
          </div>

          <div
            className="w-60 p-6 bg-(--color-primary-10) rounded-xl shadow-2xl flex flex-col justify-between h-full"
            onClick={() => navigate('/categories')}
          >
            <div>
              <h3 className="text-lg font-medium text-(--color-primary-400)">Construção</h3>
              <p className="text-(--color-primary-300) mt-1">R$ 981,30</p>
            </div>

            <div className="mt-4">
              <BtnViewDetails />
            </div>
          </div>

          <div className="w-60 p-6 bg-(--color-primary-10) rounded-xl shadow-2xl flex flex-col justify-between h-full" onClick={() => navigate('/categories')}>
            <div>
              <h3 className="text-lg font-medium text-(--color-primary-400)">Viagem</h3>
              <p className="text-(--color-primary-300) mt-1">R$ 345,20</p>
            </div>

            <div className="mt-4">
              <BtnViewDetails />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Home;