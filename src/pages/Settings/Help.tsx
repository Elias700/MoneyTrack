import { useState } from "react";
import {
    FaSearch,
    FaRocket,
    FaFolderOpen,
    FaPlus,
    FaArrowLeft,
} from "react-icons/fa";
import { InputSettingsHelp } from "../../components/UI/Inputs";
import { Button } from "../../components/UI/Buttons/Buttons";

export const Help = () => {

    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqs = [
        "Como posso adicionar um gasto?",
        "É possível compartilhar minha conta com outra pessoa?",
        "Como posso excluir uma categoria?",
        "Quais métodos de segurança posso ativar?",
        "Como posso entrar em contato com o suporte?",
    ];

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <main
            className="
                    w-full 
                    px-8 
                    py-6
                "
        >

            <div
                className="
                    flex 
                    items-center 
                    gap-2 
                    mb-6
                "
            >
                <FaArrowLeft className="text-(--color-primary-300)" />
                <a
                    href="/settings"
                    className="text-(--color-primary-300) hover:underline"
                >
                    Voltar para configurações
                </a>
            </div>

            <h1
                className="
                        mb-8
                        text-5xl 
                        font-bold 
                        text-(--color-primary-300) 
                    "
            >
                Ajuda
            </h1>

            <div className="pb-10">
                <InputSettingsHelp />
            </div>

            <section
                className="
                        bg-(--color-neutral-50)
                        rounded-xl 
                        p-6 mb-8 
                        shadow-sm
                    "
            >
                <h2
                    className="
                            mb-4
                            text-xl 
                            font-semibold 
                            text-(--color-primary-300) 
                        "
                >
                    Guias Rápidos
                </h2>

                <div
                    className="
                            grid 
                            grid-cols-1 
                            md:grid-cols-2 
                            gap-4
                        "
                >

                    <div
                        className="
                                p-4 
                                flex 
                                items-center 
                                justify-between 
                                bg-(--color-neutral-200)
                                hover:bg-(--color-primary-250)
                                rounded-lg 
                                cursor-pointer 
                                transition
                            "
                    >
                        <div
                            className="
                                    flex 
                                    items-start 
                                    gap-3
                                "
                        >
                            <FaRocket className="text-(--color-primary-400) mt-1" />
                            <div>
                                <h3
                                    className="
                                        font-semibold 
                                        text-(--color-primary-400)
                                    "
                                >
                                    Como começar a usar o Money Track
                                </h3>
                                <p
                                    className="
                                            text-sm 
                                            text-(--color-desabled)
                                        "
                                >
                                    Passos básicos para iniciar o uso do Money Track
                                </p>
                            </div>
                        </div>
                        <FaPlus className="text-(--color-primary-400) rotate-45" />
                    </div>

                    <div
                        className="
                                p-4 
                                flex 
                                items-center 
                                justify-between 
                                bg-(--color-neutral-200)
                                hover:bg-(--color-primary-250)                           
                                rounded-lg 
                                cursor-pointer 
                                transition
                            "
                    >
                        <div
                            className="
                                    flex 
                                    items-start 
                                    gap-3
                                "
                        >
                            <FaFolderOpen className="text-(--color-primary-400) mt-1" />
                            <div>
                                <h3
                                    className="
                                            font-semibold 
                                            text-(--color-primary-400)
                                        "
                                >
                                    Criando e Gerenciando Categorias
                                </h3>
                                <p className="text-sm text-(--color-desabled)">
                                    Gerencie suas despesas com categorias personalizadas
                                </p>
                            </div>
                        </div>
                        <FaPlus className="text-(--color-primary-400) rotate-45" />
                    </div>
                </div>
            </section>

            <section
                className="
                        bg-(--color-neutral-50)
                        rounded-xl 
                        p-6 mb-8 
                        shadow-sm
                    "
            >
                <h2
                    className="
                            mb-4
                            text-xl 
                            font-semibold 
                            text-(--color-primary-300) 
                        "
                >
                    Perguntas Frequentes (FAQ)
                </h2>

                <div
                    className="
                        flex 
                        flex-col gap-3">
                    {faqs.map((question, index) => (
                        <div
                            key={index}
                            className="
                                    px-4 
                                    py-3 
                                    bg-(--color-neutral-200)
                                    hover:bg-(--color-primary-250)
                                    rounded-lg 
                                    cursor-pointer
                                    duration-300
                                "
                            onClick={() => toggleFaq(index)}
                        >
                            <div
                                className="
                                        flex 
                                        justify-between
                                        items-center
                                    "
                            >
                                <p
                                    className="
                                            text-(--color-desabled)
                                        "
                                >
                                    {question}
                                </p>
                                <FaPlus
                                    className={`
                                        text-(--color-primary-300) transition-transform ${openFaq === index ? "rotate-45" : ""
                                    }`}
                                />
                            </div>

                            {openFaq === index && (
                                <p
                                    className="
                                            text-sm 
                                            text-(--color-primary-400)
                                            mt-3
                                        "
                                >
                                    Aqui você pode adicionar a resposta detalhada para essa
                                    pergunta frequente.
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section 
                className="
                        grid 
                        grid-cols-1 
                        md:grid-cols-2 
                        gap-6
                    "
                >

                <div 
                    className="
                            bg-(--color-neutral-50)
                            rounded-xl 
                            p-6 
                            shadow-sm
                        "
                    >
                    <h3 
                        className="
                                mb-2
                                font-semibold 
                                text-(--color-primary-300) 
                            "
                        >
                        Precisa de mais ajuda?
                    </h3>
                    <p 
                        className="
                                mb-4
                                text-(--color-desabled)
                            "
                        >
                        Entre em contato com nossa equipe de suporte para assistência
                        personalizada.
                    </p>
                    
                    <Button variant="primary">
                        Entrar em Contato
                    </Button>
                </div>

                <div
                    className="
                            p-6 
                            bg-(--color-neutral-50) 
                            rounded-xl 
                            shadow-sm
                        "
                >
                    <h3
                        className="
                                mb-2
                                font-semibold 
                                text-(--color-primary-300) 
                            "
                    >
                        Encontrou um problema?
                    </h3>
                    <p 
                        className="
                                text-(--color-desabled) 
                                mb-4
                            "
                        >
                        Relate um problema técnico ou bug que você encontrou enquanto
                        usava o Money Track.
                    </p>
                    
                    <Button variant="danger">
                        Reportar problema
                    </Button>
                </div>
            </section>
        </main>
    );
};
