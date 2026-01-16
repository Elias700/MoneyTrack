
import { BtnDeleteAccount } from "../../components/UI/Buttons/Buttons";
import { DeleteAccountModal } from "../../components/modals/DeleteAccountModal";
import { useState } from "react";
import { SettingsCard } from "../../components/UI/Cards/Cards";

export default function SettingsPage() {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <section className="w-full h-223 px-0 pt-8 bg-(--color-neutral-100)">
            <h1 className="text-5xl font-bold text-(--color-primary-300) ml-10">
                Configurações
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 p-10">
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

            <div className="flex justify-center mt-10">
                <BtnDeleteAccount onClick={() => setIsModalOpen(true)} />
            </div>

            <DeleteAccountModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}

