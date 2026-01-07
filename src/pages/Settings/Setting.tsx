
import { ChevronRight } from "lucide-react";
import { BtnDeleteAccount } from "../../components/UI/Buttons/Buttons";

export default function SettingsPage() {
    return (
        <section className="w-full px-0 pt-8">
            <h1 className="text-5xl font-bold text-(--color-primary-300)">
                Configurações
            </h1>

            {/* Grid de cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
                <SettingsCard
                    title="Conta e segurança"
                    items={["Perfil", "Segurança"]}
                />

                <SettingsCard
                    title="Configurações financeiras"
                    items={["Moeda", "Categorias"]}
                />

                <SettingsCard
                    title="Ajuda e suporte"
                    items={["Ajuda", "Sobre o aplicativo", "Versão do aplicativo"]}
                />

                <SettingsCard
                    title="Preferências do aplicativo"
                    items={["Tema", "Notificações"]}
                />
            </div>

            {/* Botão Excluir Conta */}
            <div className="flex justify-center mt-10">
                <BtnDeleteAccount />
            </div>
        </section>
    );
}

/* ======================================================
   COMPONENTE DO CARD
====================================================== */

interface SettingsCardProps {
    title: string;
    items: string[];
}

function SettingsCard({ title, items }: SettingsCardProps) {
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
                    text-(--color-primary-300)
                    font-semibold
                    border-b
                    border-(--color-primary-200)
                "
            >
                {title}
            </h3>

            <ul>
                {items.map((item) => (
                    <li
                        key={item}
                        className="
                            flex
                            items-center
                            justify-between
                            px-6
                            py-4
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
