import bgLogin from "../../assets/Login-background.png";
import { InputPasswordEmail } from "../../components/UI/Inputs/Inputs";
import { BtnPasswordEmail } from '../../components/UI/Buttons/Buttons';

const ForgotPassword = () => {
    return (
        <div className="relative flex flex-col gap-10 justify-center items-center h-screen w-full bg-(--color-primary-400)"
            style={{
                backgroundImage: `url(${bgLogin})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
            }}>
            
            <a href="/login" className="absolute top-8 left-8 text-(--color-neutral-200) hover:underline cursor-pointer flex items-center gap-2">
                Voltar para login
            </a>

            <h1 className="text-6xl font-bold flex items-center text-(--color-neutral-200)">
                Money<span className="text-(--color-primary-300)">Track</span>
            </h1>

            <p className="text-(--color-neutral-200)">Para recuperar sua senha, digite seu email abaixo</p>
            
            <div className="flex flex-col gap-5 w-full max-w-sm">
                <InputPasswordEmail />
                <BtnPasswordEmail />
            </div>
        </div>
    )
};

export default ForgotPassword;