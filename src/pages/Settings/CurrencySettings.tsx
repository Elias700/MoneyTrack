import { useState } from "react";
import { FaArrowLeft, FaChevronDown } from "react-icons/fa";
import { Button } from "../../components/UI/Buttons/Buttons";

const currencies = [
    { value: "BRL", label: "Real Brasileiro - BRL (R$)" },
    { value: "USD", label: "Dólar Americano - USD ($)" },
    { value: "EUR", label: "Euro - EUR (€)" },
    { value: "GBP", label: "Libra Esterlina - GBP (£)" },
    { value: "JPY", label: "Iene Japonês - JPY (¥)" },
    { value: "CHF", label: "Franco Suíço - CHF" },
    { value: "CAD", label: "Dólar Canadense - CAD (C$)" },
    { value: "AUD", label: "Dólar Australiano - AUD (A$)" },
    { value: "CNY", label: "Yuan Chinês - CNY (¥)" },
    { value: "INR", label: "Rupia Indiana - INR (₹)" },
];

export const CurrencySettings = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState(currencies[0]);

    return (
        <main>

            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <FaArrowLeft className="text-(--color-primary-300)" />
                    <a
                        href="/settings"
                        className="text-(--color-primary-300) hover:underline"
                    >
                        Voltar para configurações
                    </a>
                </div>

                <Button variant="outline">Salvar Alterações</Button>
            </div>

            <h1 className="mb-8 text-5xl font-bold text-(--color-primary-300)">
                Configurações de Moeda
            </h1>

            <p className="text-(--color-desabled) mb-10 max-w-3xl">
                Gerencie suas preferências sobre como a moeda é exibida e
                como as conversões de câmbio são realizadas.
            </p>

            <section className="space-y-2">
                <h2 className="font-semibold text-(--color-primary-300)">
                    Moeda Padrão
                </h2>

                <div className="relative max-w-md">

                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="
                            flex
                            w-full
                            h-12
                            items-center
                            justify-between
                            rounded-lg
                            border
                            border-(--color-neutral-200)
                            bg-(--color-neutral-200)
                            px-4
                            text-sm
                            text-(--color-primary-300)
                            shadow-sm
                            transition
                            focus:outline-none
                            focus:ring-2
                            focus:ring-(--color-primary-200)
                            cursor-pointer
                        "
                    >
                        {selected.label}
                        <FaChevronDown
                            className={`transition-transform ${isOpen ? "rotate-180" : ""
                            }`}
                        />
                    </button>

                    {isOpen && (
                        <div
                            className="
                                absolute
                                z-10
                                mt-2
                                w-full
                                overflow-hidden
                                rounded-lg
                                border
                                border-(--color-neutral-200)
                                bg-(--color-neutral-200)
                                shadow-xl
                            "
                        >
                            {currencies.map((item) => (
                                <div
                                    key={item.value}
                                    onClick={() => {
                                        setSelected(item);
                                        setIsOpen(!true);
                                    }}
                                    className="
                                        px-4
                                        py-3
                                        text-sm
                                        text-(--color-primary-300)
                                        transition-colors
                                        hover:bg-(--color-primary-300)
                                        hover:text-(--color-neutral-50)
                                        cursor-pointer
                                    "
                                >
                                    {item.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <p className="text-sm text-(--color-desabled) max-w-md">
                    Escolha a moeda padrão usada no aplicativo. Essa será a
                    moeda principal em relatórios, gráficos e exibições de valores.
                </p>
            </section>
        </main>
    );
};
