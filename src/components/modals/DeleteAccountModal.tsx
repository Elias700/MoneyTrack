interface DeleteAccountModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const DeleteAccountModal = ({
    isOpen,
    onClose,
}: DeleteAccountModalProps) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                onClick={onClose}
                className="absolute inset-0 bg-black/50"
            />

            <div className="relative z-10 w-full max-w-md rounded-2xl bg-(--color-neutral-200) p-6">


                <p className="text-(--color-primary-400)">
                    Tem certeza que deseja excluir sua conta?
                </p>
                <div className="flex gap-10 justify-center mt-6">
                    <button className="
                        border border-(--color-primary-300) text-(--color-primary-300)
                        hover:bg-(--color-primary-300) hover:text-white rounded-lg px-4 py-2
                        cursor-pointer duration-300
                    "
                    >
                        Excluir
                    </button>

                    <button
                        onClick={onClose}
                        className="
                            border border-(--color-primary-300) text-(--color-primary-300)
                            hover:bg-(--color-primary-300) hover:text-white rounded-lg px-4 py-2
                            cursor-pointer duration-300
                        "
                    >
                        Não excluir
                    </button>
                </div>
            </div>
        </div>
    );
};
