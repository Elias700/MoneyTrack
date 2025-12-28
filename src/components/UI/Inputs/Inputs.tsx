
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineEventNote } from "react-icons/md";

const iconClass = `
  absolute left-4 top-1/2 -translate-y-1/2
  text-[var(--color-primary-500)]
`;

export function InputName() {
  return (
    <div className="relative">
      <FiUser className={iconClass} size={18} />
      <input
        type="text"
        id="name"
        placeholder="Digite seu nome"
        className="
          block w-full h-11 pr-5 pl-12 py-2.5
          text-base font-normal shadow-sm

          text-[var(--color-primary-500)]
          bg-[var(--color-neutral-200)]
          border border-[var(--color-primary-300)]
          rounded-lg

          placeholder:text-[var(--color-primary-500)]
          placeholder:opacity-100

          focus:border-[var(--color-primary-500)]
          focus:outline-none
        "
      />
    </div>
  );
}

export function InputEmail() {
  return (
    <div className="relative">
      <FiMail className={iconClass} size={18} />
      <input
        type="email"
        id="email"
        placeholder="Digite seu email"
        className="
          block w-full h-11 pr-5 pl-12 py-2.5
          text-base font-normal shadow-sm

          text-[var(--color-primary-500)]
          bg-[var(--color-neutral-200)]
          border border-[var(--color-primary-300)]
          rounded-lg

          placeholder:text-[var(--color-primary-500)]
          placeholder:opacity-100

          focus:border-[var(--color-primary-500)]
          focus:outline-none
        "
      />
    </div>
  );
}

export function InputPassword() {
  return (
    <div className="relative">
      <FiLock className={iconClass} size={18} />
      <input
        type="password"
        id="password"
        placeholder="Digite sua senha"
        className="
          block w-full h-11 pr-5 pl-12 py-2.5
          text-base font-normal shadow-sm

          text-[var(--color-primary-500)]
          bg-[var(--color-neutral-200)]
          border border-[var(--color-primary-300)]
          rounded-lg

          placeholder:text-[var(--color-primary-500)]
          placeholder:opacity-100

          focus:border-[var(--color-primary-500)]
          focus:outline-none
        "
      />
    </div>
  );
}

export function InputPasswordConfirm() {
  return (
    <div className="relative">
      <FiLock className={iconClass} size={18} />
      <input
        type="password"
        id="passwordConfirm"
        placeholder="Confirme sua senha"
        className="
          block w-full h-11 pr-5 pl-12 py-2.5
          text-base font-normal shadow-sm

          text-[var(--color-primary-500)]
          bg-[var(--color-neutral-200)]
          border border-[var(--color-primary-300)]
          rounded-lg

          placeholder:text-[var(--color-primary-500)]
          placeholder:opacity-100

          focus:border-[var(--color-primary-500)]
          focus:outline-none
        "
      />
    </div>
  );
}

export function InputPasswordEmail() {
  return (
    <div className="relative">
      <FiLock className={iconClass} size={18} />
      <input
        type="email"
        id="email"
        placeholder="Digite seu email para recuperar a senha"
        className="
          block w-full h-11 pr-5 pl-12 py-2.5
          text-base font-normal shadow-sm

          text-[var(--color-primary-500)]
          bg-[var(--color-neutral-200)]
          border border-[var(--color-primary-300)]
          rounded-lg

          placeholder:text-[var(--color-primary-500)]
          placeholder:opacity-100

          focus:border-[var(--color-primary-500)]
          focus:outline-none
        "
      />
    </div>
  );
}

export function InputHistoryMonth() {
  return (
    <div className="relative w-full max-w-none">
      <FaRegCalendarAlt
        className="
          absolute left-3 top-1/2 -translate-y-1/2
          text-[var(--color-primary-300)]
        "
        size={18}
      />

      <input
        type="text"
        id="month"
        placeholder="Digite o mês do histórico"
        className="
          block w-120 max-w-none h-11 pl-12 pr-3
          text-base font-normal

          text-[var(--color-primary-500)]
          bg-[var(--color-neutral-200)]

          border-0
          border-b-2 border-[var(--color-primary-300)]
          rounded-t-2xl

          placeholder:text-[var(--color-primary-500)]
          placeholder:opacity-100

          focus:outline-none
          focus:border-[var(--color-primary-700)]
        "
      />
    </div>

  );
}

export function InputHistoryYear() {
  return (
    <div className="relative w-full">
      <MdOutlineEventNote
        className="
          absolute left-3 top-1/2 -translate-y-1/2
          text-[var(--color-primary-300)]
        "
        size={18}
      />

     <input
  type="text"
  id="month"
  placeholder="Digite o ano do histórico"
  className="
    block w-120 h-11 pl-12 pr-3
    text-base font-normal

    text-[var(--color-primary-500)]
    bg-[var(--color-neutral-200)]

    border-0
    border-b-2 border-[var(--color-primary-300)]
    rounded-t-2xl

    placeholder:text-[var(--color-primary-500)]
    placeholder:opacity-100

    focus:outline-none
    focus:border-[var(--color-primary-700)]
  "
/>
    </div>

  );
}
