

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



