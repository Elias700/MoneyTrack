import { useNavigate } from "react-router-dom";

const SingUp = () => {

    const navigate = useNavigate();

    return (
        <div>
            <p onClick={()=> navigate("/login")}>Voltar para Login</p>
            <h1>
                Cadastro
            </h1>
        </div>
    )
};

export default SingUp;