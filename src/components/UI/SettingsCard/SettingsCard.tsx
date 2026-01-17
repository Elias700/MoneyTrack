type Item = {
    label: string;
    onClick?: () => void;
};

type SettingsCardProps = {
    title: string;
    items: Item[];
};

export function SettingsCard({ title, items }: SettingsCardProps) {
    return (
        <div className="bg-(--color-neutral-100) rounded-xl shadow-sm p-4">
            <h2 className="text-blue-700 font-semibold mb-3">
                {title}
            </h2>

            {items.map((item, index) => (
                <div
                    key={index}
                    onClick={item.onClick}
                    className="
                        flex 
                        items-center 
                        justify-between 
                        py-3 border-b 
                        last:border-b-0 
                        cursor-pointer 
                        hover:bg-gray-50 
                        transition"
                    >
                    <span className="text-gray-600">{item.label}</span>
                    <span className="text-gray-400">{'>'}</span>
                </div>
            ))}
        </div>
    );
}
