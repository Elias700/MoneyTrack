
import { InputHistoryMonth } from "../../components/UI/Inputs/Inputs";
import { InputHistoryYear } from "../../components/UI/Inputs/Inputs";

const History = () => {
    return (
        <main className="flex justify-center bg-(--color-primary-50) p-10">
            <h1 className="text-5xl font-bold text-(--color-primary-300)">Histórico</h1>
            <section>
                <form action="" className="flex gap-25 mt-35 ml-40 max-w-md">
                    <InputHistoryMonth />
                    <InputHistoryYear />
                </form>
                <div className="flex justify-center w-full mt-70 ml-80 text-(--color-primary-500)">
                    <p className="text-3xl text-(--color-primary-300) opacity-70">Pesquise seu histórico</p>
                </div>
            </section>
        </main>
    )
};

export default History;

