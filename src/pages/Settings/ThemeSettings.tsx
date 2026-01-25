import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import { InputToggle } from "../../components/UI/Inputs";

type Theme = "light" | "dark" | "auto";

export const ThemeSettings = () => {
  const [selectedTheme, setSelectedTheme] = useState<Theme>("light");

  return (
    <main className="w-full px-4 sm:px-6">
      
      <div className="mx-auto max-w-[1920px]">

        <div className="flex items-center gap-2 mb-6">
          <FaArrowLeft className="text-[var(--color-primary-300)]" />
          <a
            href="/settings"
            className="text-[var(--color-primary-300)] hover:underline"
          >
            Voltar para configurações
          </a>
        </div>

        <h1 className="
          mb-8 
          text-5xl 
          font-bold 
          text-[var(--color-primary-300)]
          sm:text-4xl
        ">
          Tema
        </h1>

        <section className="space-y-6">

          <p className="
            text-sm 
            text-(--color-desabled)
            leading-relaxed
            max-w-4xl
          ">
            Personalize a aparência do Money Track escolhendo o tema visual de sua
            preferência. O tema se adapta automaticamente à configuração do
            sistema selecionando a opção “Automático”.
          </p>

          <div className="
           bg-(--color-neutral-50)
            rounded-xl
            shadow-sm
            w-full
            max-w-2xl
            xl:max-w-3xl
            px-5
            py-4
            space-y-3
            mx-auto
          ">
            <h2 className="
              text-sm 
              font-semibold 
              text-[var(--color-primary-300)]
            ">
              Selecionar Tema
            </h2>

 
            <div className="
              flex 
              gap-4
              flex-wrap
              justify-center
              sm:flex-col
              md:flex-row
            ">
              
              <button
                onClick={() => setSelectedTheme("light")}
                className={`
                  p-2
                  w-36 
                  h-24 
                  rounded-lg 
                  border 
                  transition 
                  cursor-pointer
                  ${selectedTheme === "light"
                    ? "border-[var(--color-primary-300)] ring-2 ring-[var(--color-primary-300)]"
                    : "border-(--color-neutral-200)"
                  }
                `}
              >
                <div className="w-full h-full bg-(--color-neutral-50) rounded-md" />
                <span className="block mt-2 text-xs text-center">Claro</span>
              </button>

              <button
                onClick={() => setSelectedTheme("dark")}
                className={`
                  p-2
                  w-36 
                  h-24 
                  rounded-lg 
                  border 
                  transition 
                  cursor-pointer
                  ${selectedTheme === "dark"
                    ? "border-[var(--color-primary-300)] ring-2 ring-[var(--color-primary-300)]"
                    : "border-(--color-neutral-200)"
                  }
                `}
              >
                <div className="w-full h-full bg-(--color-primary-600) rounded-md" />
                <span className="block mt-2 text-xs text-center">Escuro</span>
              </button>

              <button
                onClick={() => setSelectedTheme("auto")}
                className={`
                  p-2
                  w-36 
                  h-24 
                  rounded-lg 
                  border 
                  transition 
                  cursor-pointer
                  ${selectedTheme === "auto"
                    ? "border-[var(--color-primary-300)] ring-2 ring-[var(--color-primary-300)]"
                    : "border-(--color-neutral-200)"
                  }
                `}
              >
                <div className="w-full h-full bg-gradient-to-r from-gray-100 to-gray-800 rounded-md" />
                <span className="block mt-2 text-xs text-center">Automático</span>
              </button>
            </div>
          </div>


          <div className="
            bg-(--color-neutral-50)
            rounded-xl
            shadow-sm
            w-full
            max-w-2xl
            xl:max-w-3xl
            px-5
            py-4
            space-y-3
            mx-auto
    
          ">
            <h2 className="
              text-sm 
              font-semibold 
              text-[var(--color-primary-300)]
            ">
              Outras Preferências
            </h2>

            <div className="
              flex 
              justify-between 
              items-center
              flex-wrap
              gap-4
            ">
              <div className="max-w-2xl">
                <h3 className="text-sm font-medium text-(--color-primary-500)">
                  Modo Alternado
                </h3>
                <p className="text-sm text-(--color-desabled)">
                  Alternar entre as cores claras e escuras automaticamente em
                  intervalos ao longo do dia.
                </p>
              </div>

              <InputToggle label="Ativar modo alternativo" />
            </div>
          </div>

        </section>
      </div>
    </main>
  );
};
