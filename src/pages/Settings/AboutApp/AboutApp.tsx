
import {
    FaArrowLeft,
    FaCode
} from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { Button } from "../../../components/UI/Buttons/Buttons";


export const AboutApp = () => {
    return (
        <main>
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
                Sobre o Aplicativo
            </h1>

            <section className="space-y-6">

                <p
                    className="
                            text-sm 
                            text-(--color-desabled) 
                            leading-relaxed
                        "
                >
                    O Money Track é um aplicativo para controle financeiro, criado para
                    ajudar você a gerenciar melhor os seus gastos de forma segura e
                    eficiente.
                </p>

                <div className="flex gap-5">

                    <div
                        className="
                                px-15 
                                py-3 
                                flex 
                                items-center 
                                justify-between
                                bg-(--color-neutral-50)
                                rounded-xl 
                                shadow-sm
                            "
                    >
                        <div className="flex items-center gap-2">
                            <FaCode className="text-[var(--color-primary-300)]" />
                            <strong
                                className="
                                    text-sm 
                                    font-medium 
                                    text-[var(--color-primary-300)] 
                                    whitespace-nowrap
                                "
                            >
                                Versão: 1.2.3
                            </strong>
                        </div>
                    </div>

                    <div 
                        className="
                                px-4
                                py-3 
                                flex 
                                items-center 
                                justify-between 
                                bg-(--color-neutral-50)
                                rounded-xl                  
                                shadow-sm 
                                w-full
                             "
                            >
                        <div 
                            className="
                                    flex 
                                    items-center 
                                    gap-2
                                "
                            >
                            <span 
                                className="
                                        text-sm 
                                        font-medium 
                                        text-[var(--color-primary-300)]
                                    "
                                >
                                Licença: Proprietária
                            </span>
                        </div>

                        <a
                            href="#"
                            className="
                                flex 
                                items-center 
                                gap-1 
                                text-sm 
                                font-medium 
                                text-[var(--color-primary-300)] 
                                hover:opacity-80
                            "
                        >
                            Ver licença
                            <FiChevronRight />
                        </a>
                    </div>
                </div>

                <div 
                    className="
                            p-6 
                            bg-(--color-neutral-50)                         
                            rounded-xl 
                            shadow-sm 
                            space-y-3
                        "
                    >
                    <h2 
                        className="
                                font-semibold 
                                text-[var(--color-primary-300)]
                            "
                        >
                        Está gostando do Money Track?
                    </h2>

                    <p 
                        className="
                                text-sm 
                                text-[var(--color-desabled)]
                            "
                        >
                        Convide um amigo para experimentar o Money Track também!
                    </p>

                    <Button variant="success">
                        Convidar um amigo
                    </Button>
                </div>

            </section>


        </main>
    )
};