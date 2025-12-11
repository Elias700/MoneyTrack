

export function BtnViewDetails() {
    return (
        <button
            className="
        px-4 py-2 rounded-lg 
        bg-(--color-primary-300)
        text-(--color-neutral-100)
        font-medium
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
        hover:bg-(--color-error-hover)
        cursor-pointer
        transition
      "
        >
            Excluir
        </button> 
    );
};

// export function BtnCancel() {
//     return (
//         <button
//             className="
//         px-4 py-2 rounded-lg 
//         bg-red-600 text-white 
//         font-semibold 
//         hover:bg-red-700
//         transition
//       "
//         >
//             Cancelar
//         </button>
//     );
// }
