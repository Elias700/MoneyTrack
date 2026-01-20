
import { BtnDeleteAccount } from "../../components/UI/Buttons/Buttons";
import { DeleteAccountModal } from "../../components/modals/DeleteAccountModal";
import { useState } from "react";
import { SettingsCard } from "../../components/UI/SettingsCard/SettingsCard";
import { useNavigate, Outlet } from "react-router-dom";

export default function Settings() {

    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <main className="w-full px-0 pt-8 bg-(--color-neutral-100)">

            <h1 className="text-5xl font-bold text-(--color-primary-300) ml-10">
                Configurações
            </h1>

            <section className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 pt-20">

                <SettingsCard
                    title="Conta e segurança"
                    items={[
                        { label: 'Perfil', onClick: () => navigate('/settings/profile') },
                        { label: 'Segurança', onClick: () => navigate('/settings/security') }
                    ]}
                />

                <SettingsCard
                    title="Configurações e financeira"
                    items={[
                        { label: 'Moeda', onClick: () => navigate('/settings/currency') },
                        { label: 'Categorias', onClick: () => navigate('/settings/categoriesSettings') }
                    ]}
                />

                <SettingsCard
                    title="Ajuda e suporte"
                    items={[
                        { label: 'Ajuda', onClick: () => navigate('/settings/help') },
                        { label: 'Sobre o aplicativo', onClick: () => navigate('/settings/about') },
                        { label: 'Versão do aplicativo', onClick: () => {navigate('/settings/version')} }
                    ]}
                />

                <SettingsCard
                    title="Preferências do aplicativo"
                    items={[
                        { label: 'Tema', onClick: () => navigate('/settings/theme') },
                        { label: 'Notificações', onClick: () => navigate('/settings/notificationSettings') }
                    ]}
                />


            </section>

            <div className="flex justify-center">
                <BtnDeleteAccount onClick={() => setIsModalOpen(true)} />
            </div>

            <DeleteAccountModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

        </main>
    );
}

