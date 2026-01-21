import { useState } from "react";
import { RiDownload2Line } from "react-icons/ri";
import { HistoryModal } from "../../components/modals/HistoryModal";
import { InputHistoryYear } from "../../components/UI/Inputs/index";
import { InputHistoryMonth } from "../../components/UI/Inputs/index";
import { FiMail } from "react-icons/fi";
import { InputBase } from "../../components/UI/Inputs/InputBase";

const History = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main
            className="
                    p-10 
                    flex 
                    flex-col 
                    w-full 
                    bg-(--color-neutral-100)
                "
        >

            <section
                className="
                        flex 
                        justify-between 
                        items-center 
                        w-full
                    "
            >

                <h1
                    className="
                            text-5xl 
                            font-bold 
                            text-(--color-primary-300)
                        "
                >
                    Histórico
                </h1>

                <button onClick={() => setIsModalOpen(true)}>
                    <RiDownload2Line
                        size={50}
                        className="
                            cursor-pointer 
                            text-(--color-primary-300) 
                            hover:text-(--color-primary-500) 
                            duration-400
                        "
                    />
                </button>

                <HistoryModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            </section>

            <section className="ml-70">
                <form
                    action=""
                    className="
                            flex 
                            gap-25 
                            mt-35 
                            max-w-md
                        "
                >

                    <div className="flex gap-6">
                        <div className="w-96">
                            <InputHistoryYear />
                        </div>

                        <div className="w-96">
                            <InputHistoryMonth />
                        </div>
                    </div>


                </form>

                <div
                    className="
                            mt-40 
                            ml-100 
                            text-(--color-primary-500)
                        "
                >
                    <p
                        className="
                                text-3xl 
                                text-(--color-primary-300) 
                                opacity-70
                                
                            "
                    >
                        Pesquise seu histórico
                    </p>
                </div>

            </section>
        </main>
    )
};

export default History;