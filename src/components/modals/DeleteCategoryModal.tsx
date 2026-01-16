
import type { DeleteCategory } from "../../types/DeleteCategory";


export function DeleteCategoryModal({
    isOpen,
    onClose,
    onConfirm,
    categoryName }: DeleteCategory) {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            
            <div
                onClick={onClose}
                className="absolute inset-0 bg-black/50"
            />

            <div className="
                    relative z-10
                    w-full max-w-md
                    rounded-2xl
                    bg-(--color-neutral-200)
                    p-6
                "
            >
                <h2 className="text-xl font-semibold text-(--color-primary-300) mb-4">
                    Excluir categoria
                </h2>

                <p className="text-(--color-primary-400)">
                    Tem certeza que deseja excluir a categoria
                    <strong> {categoryName ?? ""}</strong>?
                </p>

                <div className="flex gap-4 justify-end mt-6">
                    <button
                        onClick={onClose}
                        className="
                            border border-(--color-primary-300)
                            text-(--color-primary-300)
                            rounded-lg px-4 py-2
                            hover:bg-(--color-primary-300)
                            hover:text-white
                            duration-300
                            cursor-pointer
                        "
                    >
                        Cancelar
                    </button>

                    <button
                        onClick={onConfirm}
                        className="
                        bg-(--color-error)
                        text-white
                        rounded-lg px-4 py-2
                        hover:bg-(--color-error-hover)
                        duration-300
                        cursor-pointer
                    "
                    >
                        Excluir
                    </button>
                </div>
            </div>
        </div>
    )
};