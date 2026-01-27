import { FaArrowLeft, FaExclamationTriangle } from "react-icons/fa";
import { Button } from "../../../components/UI/Buttons/Buttons";

export const Security = () => {
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
                mb-10
                text-5xl 
                font-bold 
                text-(--color-primary-300)
            "
            >
                Segurança
            </h1>

            <section
                className="
                bg-(--color-neutral-200)
                rounded-xl 
                p-6 mb-6 
                shadow-sm
            "
            >
                <div
                    className="
                    mb-3
                    flex 
                    justify-between 
                    items-center
                "
                >
                    <h2
                        className="
                                text-xl 
                                font-semibold 
                                text-(--color-primary-300)
                            "
                    >
                        Autenticação em Duas Etapas
                    </h2>

                    <div
                        className="
                            flex 
                            items-center 
                            gap-2 
                            text-sm 
                            text-(--color-primary-300)
                        "
                    >
                        Desativado
                        <input
                            type="checkbox"
                            className="toggle"
                        />
                    </div>
                </div>

                <p
                    className="
                            mb-4
                            text-(--color-primary-500)
                        "
                >
                    Adicione uma camada extra de segurança ativando a autenticação
                    em duas etapas via código enviado por app autenticador.
                </p>

                <Button variant="success">
                    Ativar Autenticação em Duas Etapas
                </Button>
            </section>

            <section
                className="
                        bg-(--color-neutral-200) 
                        rounded-xl
                        p-6 mb-6 
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
                    Sessões Ativas
                </h2>

                <div
                    className="
                            border 
                            rounded-lg 
                            p-4 
                            flex 
                            justify-between
                            items-center
                        "
                >
                    <div>
                        <p className="font-medium">Mac OS • Chrome</p>
                        <p className="text-sm text-gray-500">Hoje, 15:23</p>
                        <p className="text-sm text-gray-400">Rio de Janeiro, Brasil</p>
                    </div>

                    <Button variant="danger">
                        Encerrar Sessão
                    </Button>
                </div>
            </section>

            <section
                className="
                        bg-(--color-neutral-200)
                        rounded-xl 
                        p-6 mb-8 
                        shadow-sm 
                        flex 
                        justify-between 
                        items-center
                    "
            >
                <div>
                    <h2
                        className="
                                text-xl 
                                font-semibold 
                                text-(--color-primary-300)
                            "
                    >
                        Alertas de Segurança
                    </h2>

                    <p className="text-(--color-desabled)">
                        Receba notificações por email sobre atividades suspeitas na sua conta.
                    </p>
                </div>

                <input
                    type="checkbox"
                    defaultChecked className="toggle"
                />
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
                            bg-white 
                            rounded-xl 
                            p-6 
                            shadow-sm 
                            border 
                            border-red-200
                        "
                >
                    <div
                        className="
                                flex 
                                items-center 
                                gap-2 mb-2 
                                text-red-600
                            "
                    >
                        <FaExclamationTriangle />
                        <h2 className="text-lg font-semibold">Zona de Perigo</h2>
                    </div>

                    <p className="text-gray-500 mb-4">
                        Remover todos os seus gastos cadastrados.
                    </p>

                    <button
                        className="
                                w-full 
                                flex 
                                justify-between 
                                items-center 
                                px-4 py-2 
                                bg-red-50 
                                text-red-600 
                                rounded-lg 
                                hover:bg-red-100
                                cursor-pointer
                            "
                    >
                        Excluir Dados de Gastos
                        <FaArrowLeft className="rotate-180" />
                    </button>
                </div>

                <div
                    className="
                            bg-white 
                            rounded-xl 
                            p-6 
                            shadow-sm 
                            border 
                            border-red-200
                        "
                >
                    <div
                        className="
                                flex 
                                items-center 
                                gap-2 mb-2 
                                text-red-600
                            "
                    >
                        <FaExclamationTriangle />
                        <h2 className="text-lg font-semibold">Excluir Conta</h2>
                    </div>

                    <p className="text-gray-500 mb-4">
                        Desativar sua conta e apagar todos os seus dados.
                    </p>

                    <button
                        className="
                                w-full 
                                flex 
                                justify-between 
                                items-center 
                                px-4 py-2 
                                bg-red-50 
                                text-red-600 
                                rounded-lg 
                                hover:bg-red-100
                                cursor-pointer
                            "
                    >
                        Excluir Conta
                        <FaArrowLeft className="rotate-180" />
                    </button>
                </div>

            </section>
        </main>
    );
};
