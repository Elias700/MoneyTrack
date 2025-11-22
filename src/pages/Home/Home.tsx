
import { BtnViewDetails } from "../../components/UI/Buttons/Buttons";

const Home = () => {

    
    return (
        <main>
            <div className="flex justify-between p-10">
                <h1 className="text-5xl text-[--color-primary-200]">Resumo do mês de ...</h1>
                <p className="text-5xl font-medium">Usuário</p>
            </div>
            <section>
                <h2>Total de gastos</h2>
                <p>R$ 10,00</p>
            </section>
            <section>
                <h2>Categorias</h2>
                <div>
                    <h3>Nome da categoria</h3>
                    <p>R$ 150,00</p>
                    <BtnViewDetails />
                  
      
                </div>
            </section>
        </main>
    )
};

export default Home;