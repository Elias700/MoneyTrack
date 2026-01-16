

interface BtnDeleteAccountProps {
    onClick: () => void;
}

interface ButtonProps {
    onClick?: () => void;
}

export function BtnViewDetails() {
    return (
        <button
            className="
                px-4 py-2 rounded-lg 
                bg-(--color-primary-300)
                text-(--color-neutral-100)
                font-medium
                duration-500
                hover:bg-(--color-primary-400)
                cursor-pointer
                transition
            "
        >
            Ver detalhes
        </button>
    );
};


export function BtnConfirm() {
    return (
        <button
            className="
                px-4 py-2 rounded-lg 
                bg-(--color-success)
                text-(--color-primary-50)
                font-medium
                duration-500
                hover:bg-(--color-success-hover)
                cursor-pointer
                transition
            "
        >
            Adicionar categoria
        </button>
    );
};

export function BtnDelete() {
    return (
        <button
            className="
                px-4 py-2 rounded-lg 
                bg-(--color-error)
                text-(--color-primary-50)
                font-medium
                duration-500
                hover:bg-(--color-error-hover)
                cursor-pointer
                transition
            "
        >
            Excluir
        </button>
    );
};

export function BtnDeleteAccount({ onClick }: BtnDeleteAccountProps) {
    return (
        <button
            onClick={onClick}
            className="
                px-4 py-2 rounded-lg 
                bg-(--color-error)
                text-(--color-neutral-100)
                font-medium
                duration-500
                hover:bg-(--color-error-hover)
                cursor-pointer
                transition
            "
        >
            Excluir conta
        </button>
    );
};

export function BtnEntrar() {
    return (
        <button
            className="
                w-full h-12
                rounded-lg 
                bg-(--color-primary-300)
                text-(--color-neutral-200)
                font-medium
                duration-500
                hover:bg-(--color-primary-400)
                cursor-pointer
                transition
            "
        >
            Entrar
        </button>
    );
};

export function BtnSingUp() {
    return (
        <button
            className="
                w-full h-12
                rounded-lg 
                bg-(--color-primary-300)
                text-(--color-neutral-200)
                font-medium
                duration-500
                hover:bg-(--color-primary-400)
                cursor-pointer
                transition
            "
        >
            Cadastrar
        </button>
    );
};

export function BtnPasswordEmail() {
    return (
        <button
            className="
                w-full h-12
                rounded-lg 
                bg-(--color-primary-300)
                text-(--color-neutral-200)
                font-medium
                hover:bg-(--color-primary-600)
                duration-500
                cursor-pointer
                transition
            "
        >
            Recuperar senha
        </button>
    );
};

export function BtnAddExpense() {
    return (
        <button
            className="
                w-40 h-12
                rounded-lg 
                bg-(--color-primary-300)
                text-(--color-neutral-200)
                font-medium
                hover:bg-(--color-primary-600)
                duration-500
                cursor-pointer
                transition
            "
        >
            Adicionar gasto
        </button>
    );
};

export function BtnAddCategory({ onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className="
                bg-(--color-success)
                hover:bg-(--color-success-hover)
                transition

                px-4 py-2
                sm:px-6 sm:py-3

                rounded-xl
                text-(--color-primary-400)

                text-sm
                sm:text-base
                md:text-lg

                font-semibold
                cursor-pointer
                hover:text-(--color-neutral-200)

                w-full
                sm:w-auto
            "
        >
            Adicionar categoria +
        </button>
    );
};

export function BtnCreateCategory() {
    return (
        <button
            className="
                w-40 h-12
                rounded-lg 
                bg-(--color-primary-300)
                text-(--color-neutral-200)
                font-medium
                hover:bg-(--color-primary-600)
                duration-500
                cursor-pointer
                transition
            "
        >
            Criar categoria
        </button>
    );
};

export function EditCategory() {
    return (
        <button
            className="
                flex-1
                border border-(--color-primary-300)
                text-(--color-primary-300)
                rounded-lg px-4 py-2
                text-sm font-medium
                hover:bg-(--color-primary-300)
                hover:text-white
                transition
                cursor-pointer
            "
        >
            Editar
        </button>
    );
}


export function NewExpense() {
    return (
        <button
            className="
                flex-1
                bg-(--color-success)
                text-(--color-neutral-200)
                rounded-lg px-4 py-2
                text-sm font-medium
                hover:bg-(--color-success-hover)
                transition
                cursor-pointer
            "
        >
            Novo gasto
        </button>
    );
}








