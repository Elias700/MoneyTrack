import { InputHistoryMonth } from "../../components/UI/Inputs/Inputs";
import { InputHistoryYear } from "../../components/UI/Inputs/Inputs";
import { RiDownload2Line } from "react-icons/ri";

const History = () => {
    return (
        // Alterado para flex-col para os itens ficarem um abaixo do outro, e w-full para ocupar tudo
        <main className="flex flex-col w-full bg-(--color-primary-50) p-10">
            
            {/* Esta section agora ocupa a largura total e joga os itens para as pontas */}
            <section className="flex justify-between items-center w-full">
                <h1 className="text-5xl font-bold text-(--color-primary-300)">Histórico</h1>
                <button className="cursor-pointer hover:opacity-80 transition-opacity">
                    <RiDownload2Line size={50} className="text-[var(--color-primary-300)]"/>
                </button>
            </section>

            <section className="ml-70">
                <form action="" className="flex gap-25 mt-35 max-w-md">
                    <InputHistoryMonth />
                    <InputHistoryYear />
                </form>
                
                <div className="mt-60 ml-100 text-(--color-primary-500)">
                    <p className="text-3xl text-(--color-primary-300) opacity-70">Pesquise seu histórico</p>
                </div>
            </section>
        </main>
    )
};

export default History;