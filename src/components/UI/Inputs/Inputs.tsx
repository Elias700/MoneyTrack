import { FiUser, FiMail, FiLock } from "react-icons/fi";

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
