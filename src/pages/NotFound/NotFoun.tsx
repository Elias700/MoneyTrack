
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/UI/Buttons/Buttons";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <main
            className="
                flex 
                flex-col 
                items-center 
                justify-center 
                text-center
                h-full
            "
        >

            <h1 className="text-7xl font-bold text-(--color-primary-300)">404</h1>

            <p className="mt-4 text-xl text-(--color-primary-500)">
                Opa! A página que você tentou acessar não existe.
            </p>

            <div className="mt-4 py-3">
                <Button 
                    variant="primary" 
                    onClick={() => navigate("/")}
                >
                    Voltar para o início
                </Button>
            </div>
        </main>
    );
};

export default NotFound;
