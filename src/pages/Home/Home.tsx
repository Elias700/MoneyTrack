
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/UI/Buttons/Buttons";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main 
      className="
        p-10 
        flex-1 
        w-full 
        h-[93%] 
        bg-(--color-neutral-100) 
        overflow-y-auto">

      <div 
        className="
            flex 
            justify-between 
            items-start
          "
        >
        <h1 
          className="
              text-5xl 
              font-bold 
              leading-tight 
              text-(--color-primary-300)
            "
          >
          Resumo do mês <br /> de Novembro
        </h1>
      </div>

      <section className="mt-20">
        <div 
          className="
              w-64 
              p-6 
              bg-(--color-primary-10) 
              rounded-xl 
              shadow-2xl
            "
          >
          <h2 
            className="
                text-lg 
                font-medium 
                text-(--color-primary-300)
              "
            >
              Total de gastos
          </h2>
          <p 
            className="
              mt-2
              text-4xl 
              font-bold 
              text-(--color-primary-400)">
            R$ 2.500
          </p>
        </div>
      </section>

      <section className="mt-20">
        <h2 
          className="
              mb-5 
              text-3xl 
              font-semibold 
              text-(--color-primary-300)
            "
            >
              Categorias
        </h2>

        <div 
          className="
            flex
            gap-6 
            flex-wrap 
            items-stretch
          "
        >

          <div
            className="
                h-full
                w-60 
                p-6 
                bg-(--color-primary-10) 
                rounded-xl 
                shadow-2xl 
                flex 
                flex-col 
                justify-between 
            "
            onClick={() => navigate("/categories")}
          >
            <div>
              <h3 
                className="
                  text-lg 
                  font-medium 
                  text-(--color-primary-400)
                "
                >
                  Streaming
              </h3>
              <p 
                className="
                    mt-1
                    text-(--color-primary-300)
                  "
                >R$ 150,00
              </p>
            </div>

            <div className="mt-4">
              <Button variant="outline" size="sm">
                Ver Detalhes
              </Button>
            </div>
          </div>

          <div
            className="
              w-60 
              p-6 
              bg-(--color-primary-10) 
              rounded-xl 
              shadow-2xl 
              flex 
              flex-col 
              justify-between h-full
            "
            onClick={() => navigate('/categories')}
          >
            <div>
              <h3 
                className="
                  text-lg 
                  font-medium 
                  text-(--color-primary-400)
                  "
                >
                  Construção
              </h3>
              <p 
                className="
                    mt-1
                    text-(--color-primary-300)
                  "
                >
                  R$ 981,30
              </p>
            </div>

            <div className="mt-4">
              <Button variant="outline" size="sm">
                Ver Detalhes
              </Button>
            </div>
          </div>

          <div 
            className="
              w-60 
              p-6
              bg-(--color-primary-10) 
              rounded-xl 
              shadow-2xl 
              flex 
              flex-col 
              justify-between 
              h-full" onClick={() => navigate('/categories')}
            >
            <div>
              <h3 
                className="
                    text-lg 
                    font-medium 
                    text-(--color-primary-400)
                  "
              >
                    Viagem
                </h3>
              <p 
                className="
                    mt-1
                    text-(--color-primary-300)
                  "
              >
                    R$ 345,20
              </p>
            </div>

            <div className="mt-4">
              <Button variant="outline" size="sm">
                Ver Detalhes
              </Button>
            </div>
          </div>

        </div>
      </section>
      
    </main>
  );
};

export default Home;