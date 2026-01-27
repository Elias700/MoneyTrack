import { FaUserCircle } from "react-icons/fa";
import {
  MdLock,
  MdNotifications,
  MdLanguage,
  MdAttachMoney,
  MdDownload,
  MdHelpOutline,
  MdPrivacyTip,
  MdDescription,
  MdLogout,
} from "react-icons/md";

import { useNavigate } from "react-router-dom";
import { Button } from "../../components/UI/Buttons/Buttons";
import { AccountItem } from "./components/AccountItem";

const Account = () => {
  const navigate = useNavigate();

  return (
    <main className="w-full px-4 sm:px-6 py-8 sm:py-10">
      {/* Título */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-(--color-primary-300) mb-8 sm:mb-10">
        Minha Conta
      </h1>

      <section
        className="
          bg-(--color-neutral-200)
          rounded-2xl
          shadow-md
          border
          border-neutral-200
          max-w-5xl
          mx-auto
          text-(--color-primary-300)
        "
      >
        {/* Header do usuário */}
        <div
          className="
            flex flex-col sm:flex-row
            items-center sm:items-center
            gap-4 sm:gap-6
            p-5 sm:p-6
            border-b
            text-center sm:text-left
          "
        >
          <FaUserCircle className="text-6xl sm:text-7xl text-(--color-primary-300)" />

          <div className="flex-1">
            <p className="text-lg sm:text-xl font-semibold">
              Nome do Usuário
            </p>
            <p className="text-sm sm:text-base text-(--color-desabled)">
              usuario@email.com
            </p>
          </div>

          <div className="w-full sm:w-auto">
            <Button
              variant="primary"
              className="w-full sm:w-auto"
              onClick={() => navigate("/account/profile")}
            >
              Editar Perfil
            </Button>
          </div>
        </div>

        {/* Lista de opções */}
        <ul className="divide-y">
          <AccountItem icon={<MdLock />} label="Alterar Senha" to="/account/security" />
          <AccountItem icon={<MdNotifications />} label="Notificações" to="/account/notifications" />
          <AccountItem icon={<MdLanguage />} label="Idioma" to="/account/language" />
          <AccountItem icon={<MdAttachMoney />} label="Configurações de Moeda" to="/account/currency" />
          <AccountItem icon={<MdDownload />} label="Exportar Dados" to="/account/export" />
          <AccountItem icon={<MdHelpOutline />} label="Suporte e Ajuda" to="/support" />
          <AccountItem icon={<MdPrivacyTip />} label="Política de Privacidade" to="/privacy" />
          <AccountItem icon={<MdDescription />} label="Termos de Uso" to="/terms" />

          <AccountItem
            icon={<MdLogout />}
            label="Sair da Conta"
            to="/logout"
            variant="danger"
          />
        </ul>
      </section>
    </main>
  );
};

export default Account;
