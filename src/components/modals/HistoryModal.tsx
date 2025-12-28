
interface HistoryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function HistoryModal({ isOpen, onClose }: HistoryModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                onClick={onClose}
                className="absolute inset-0 bg-black/50"
            />

            <div className="relative z-10 w-full max-w-md rounded-2xl bg-(--color-neutral-200) p-6">
                <h2 className="text-xl text-(--color-primary-300) font-semibold mb-4">Baixar gastos</h2>
                <p className="text-(--color-primary-400)">Deseja baixar os gastos do mês de junho de 2025?</p>
                <div className="flex gap-10 justify-center mt-6">
                    <button className="border border-(--color-primary-300) text-(--color-primary-300) hover:bg-(--color-primary-300) hover:text-white rounded-lg px-4 py-2 cursor-pointer duration-300">Baixar</button>
                    <button onClick={onClose} className="border border-(--color-primary-300) text-(--color-primary-300) hover:bg-(--color-primary-300) hover:text-white rounded-lg px-4 py-2 cursor-pointer duration-300">Não baixar</button>
                </div>
            </div>
        </div>
    );
}
