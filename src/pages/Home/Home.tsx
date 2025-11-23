import { BtnViewDetails } from "../../components/UI/Buttons/Buttons";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="flex-1 w-full bg-(--color-primary-50) p-10 overflow-y-auto">

      <div className="flex justify-between items-start">
        <h1 className="text-5xl font-bold leading-tight text-(--color-primary-700)">
          Resumo do mês <br /> de Novembro
        </h1>

        <div className="text-right flex gap-10">
          <p className="text-2xl font-medium text-(--color-primary-700)">Elias Ribeiro</p>
          <p onClick={() => navigate("/login")}>Login</p>
          <p onClick={() => navigate("/cadastro")}>Cadatro</p>
        </div>
      </div>

      <section className="mt-20">
        <div className="w-64 p-6 bg-white rounded-xl shadow-2xl">
          <h2 className="text-lg font-medium text-(--color-primary-800)">Total de gastos</h2>
          <p className="text-4xl font-bold mt-2 text-(--color-primary-500)">
            R$ 2.500
          </p>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-semibold mb-5 text-(--color-primary-500)">Categorias</h2> 

        <div className="flex gap-6 flex-wrap items-stretch"> 

          <div 
            className="w-60 p-6 bg-white rounded-xl shadow-2xl flex flex-col justify-between h-full" 
            onClick={() => navigate("/categories")}
          >
            <div>
              <h3 className="text-lg font-medium text-(--color-primary-800)">Streaming</h3>
              <p className="text-(--color-primary-500) mt-1">R$ 150,00</p>
            </div>
            
            <div className="mt-4">
              <BtnViewDetails />
            </div>
          </div>

          <div className="w-60 p-6 bg-white rounded-xl shadow-2xl flex flex-col justify-between h-full" onClick={() => navigate('/categories')}>
            <div>
              <h3 className="text-lg font-medium text-(--color-primary-800)">Construção</h3>
              <p className="text-(--color-primary-500) mt-1">R$ 981,30</p>
            </div>

            <div className="mt-4">
              <BtnViewDetails />
            </div>
          </div>

          <div className="w-60 p-6 bg-white rounded-xl shadow-2xl flex flex-col justify-between h-full" onClick={() => navigate('/categories')}>
            <div>
              <h3 className="text-lg font-medium text-(--color-primary-800)">Viagem</h3>
              <p className="text-(--color-primary-500) mt-1">R$ 345,20</p>
            </div>

            <div className="mt-4">
              <BtnViewDetails />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Home;