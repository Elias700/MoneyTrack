import { FaArrowLeft } from "react-icons/fa";
import { MdEmail, MdNotifications, MdCalendarMonth } from "react-icons/md";
import { InputToggle } from "../../components/UI/Inputs";

export const NotificationSettings = () => {
  return (
    <main className="max-w-5xl mx-auto px-4">
      
      <div className="flex items-center gap-2 pb-6">
        <FaArrowLeft className="text-(--color-primary-300)" />
        <a
          href="/settings"
          className="text-(--color-primary-300) hover:underline"
        >
          Voltar para configurações
        </a>
      </div>

      <h1 className="text-5xl font-bold text-(--color-primary-300) mb-4">
        Notificações
      </h1>

      <p className="text-(--color-desabled) mb-10 max-w-3xl">
        Gerencie suas preferências de notificações para manter-se informado
        sobre suas atividades financeiras.
      </p>

      <section className="p-6 space-y-5">
       
        <div className="flex items-center justify-between bg-(--color-neutral-200) rounded-lg p-5">
          <div className="flex gap-3 max-w-xl">
            <MdEmail className="text-(--color-primary-300) text-xl mt-1" />
            <div>
              <h2 className="font-semibold text-(--color-primary-300)">
                Notificações por E-mail
              </h2>
              <p className="text-sm text-(--color-desabled)">
                Receba notificações da suas atividades como adição e alteração de
                gastos, alertas de segurança, e outras atualizações importantes
                no seu e-mail.
              </p>
            </div>
          </div>

          <InputToggle />
        </div>

        <div className="flex items-center justify-between bg-(--color-neutral-200) rounded-lg p-5">
          <div className="flex gap-3 max-w-xl">
            <MdNotifications className="text-(--color-primary-300) text-xl mt-1" />
            <div>
              <h2 className="font-semibold text-(--color-primary-300)">
                Notificações por Push
              </h2>
              <p className="text-sm text-(--color-desabled)">
                Receba alertas instantâneos no seu dispositivo sobre suas
                atividades financeiras.
              </p>
            </div>
          </div>

          <InputToggle />
        </div>

        <div className="flex items-center justify-between bg-(--color-neutral-200) rounded-lg p-5">
          <div className="flex gap-3 max-w-xl">
            <MdCalendarMonth className="text-(--color-primary-300) text-xl mt-1" />
            <div>
              <h2 className="font-semibold text-(--color-primary-300)">
                Resumo Semanal e Mensal
              </h2>
              <p className="text-sm text-(--color-desabled)">
                Receba um resumo detalhado das suas despesas e atividades
                financeiras toda semana e todo mês.
              </p>
            </div>
          </div>

          <InputToggle />
        </div>
      </section>
    </main>
  );
};
