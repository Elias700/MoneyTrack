
import { FiChevronRight } from "react-icons/fi";

type Item = {
    // id: string;
    label: string;
    onClick?: () => void;
};

type SettingsCardProps = {
    title: string;
    items: Item[];
};

export function SettingsCard({ title, items }: SettingsCardProps) {
    return (
        <div className="
                bg-(--color-neutral-200)
                rounded-xl
                shadow-sm
                p-4
                pb-8
                md:pb-4
            "
        >

            <h2 
                className="
                        text-(--color-primary-400) 
                        font-semibold mb-3
                    "
                >
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
                        hover:font-bold
                        text-(--color-primary-500)
                    "
                >
                    <div
                        className="
                            group
                            flex
                            justify-between
                            w-full
                            cursor-pointer
                        "
                    >
                        <span
                            className="
                                text-(--color-primary-300)
                                transition
                                group-hover:font-bold
                            "
                        >
                            {item.label}
                        </span>

                        <FiChevronRight
                            className="
                                text-(--color-primary-300)
                                transition
                                group-hover:stroke-[3]
                                group-hover:translate-x-1
                            "
                        />
                    </div>

                </div>
            ))}
        </div>
    );
}
