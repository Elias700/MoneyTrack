
import {
  FiUser,
  FiMail,
  FiLock,
  FiEdit3,
  FiDollarSign,
  FiCalendar,
  FiLayers,
  FiCreditCard,
  FiTag,
} from "react-icons/fi";
import { FaRegCalendarAlt, FaSearch } from "react-icons/fa";
import { MdOutlineEventNote } from "react-icons/md";
import { InputBase } from "./InputBase";
import type { InputHTMLAttributes } from "react";

export const InputName = () => (
  <InputBase
    icon={<FiUser size={18} />}
    placeholder="Digite seu nome"
  />
);

export const InputEmail = () => (
  <InputBase
    type="email"
    icon={<FiMail size={18} />}
    placeholder="Digite seu email"
  />
);

export const InputPassword = () => (
  <InputBase
    type="password"
    icon={<FiLock size={18} />}
    placeholder="Digite sua senha"
  />
);

export const InputPasswordConfirm = () => (
  <InputBase
    type="password"
    icon={<FiLock size={18} />}
    placeholder="Confirme sua senha"
  />
);

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const InputHistoryMonth = (props: InputProps) => (
  <InputBase
    icon={<FaRegCalendarAlt size={18} />}
    placeholder="Digite o mês do histórico"
    variant="underline"
    {...props}
  />
);

export const InputHistoryYear = (props: InputProps) => (
  <InputBase
    icon={<MdOutlineEventNote size={18} />}
    placeholder="Digite o ano do histórico"
    variant="underline"
    {...props}
  />
);

export const InputNameExpense = () => (
  <InputBase
    icon={<FiEdit3 size={18} />}
    placeholder="Nome do gasto"
  />
);

export const InputTotalAmount = () => (
  <InputBase
    icon={<FiDollarSign size={18} />}
    placeholder="Valor total do gasto"
  />
);

export const InputDate = () => (
  <InputBase
    icon={<FiCalendar size={18} />}
    placeholder="DATA (DD/MM/AAAA)"
  />
);

export const InputInstallments = () => (
  <InputBase
    icon={<FiLayers size={18} />}
    placeholder="Parcelas (0 se não for parcelado)"
  />
);

export const InputPaymentMethod = () => (
  <InputBase
    icon={<FiCreditCard size={18} />}
    placeholder="Método de pagamento"
  />
);

export const InputCategory = () => (
  <InputBase
    icon={<FiTag size={18} />}
    placeholder="Categorias"
  />
);

export const InputSettingsProfileName = () => (
  <InputBase
    placeholder="Nome completo"
    variant="settings"
  />
);

export const InputSettingsProfileEmail = () => (
  <InputBase
    type="email"
    placeholder="email@exemplo.com"
    variant="settings"
  />
);

export const InputSettingsProfileUser = () => (
  <InputBase
    placeholder="Nome de usuário"
    variant="settings"
  />
);

export const InputSettingsHelp = () => (
  <InputBase
    icon={<FaSearch size={18} />}
    type="text"
    placeholder="Digite sua dúvida ..."
    variant="default"
  />
);


