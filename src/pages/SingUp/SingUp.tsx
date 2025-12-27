import bgLogin from "../../assets/Login-background.png";
import {
    InputName,
    InputEmail,
    InputPassword,
    InputPasswordConfirm
} from "../../components/UI/Inputs/Inputs";
import { BtnSingUp } from "../../components/UI/Buttons/Buttons";

const SingUp = () => {
    return (
        <div className="flex h-screen w-full">

            <div
                className="w-1/2 relative bg-cover bg-center bg-no-repeat flex items-center justify-center"
                style={{
                    backgroundImage: `url(${bgLogin})`,
                }}
            >
                {/* Overlay escuro */}
                <div className="absolute inset-0 bg-black/50" />

                <div className="relative z-10 text-white px-8 w-full max-w-sm mb-12">
                    <h1 className="text-6xl font-bold flex items-center text-(--color-neutral-200)">
                        Money<span className="text-(--color-primary-300)">Track</span>
                    </h1>
                    <p className="text-lg text-(--color-neutral-200) self-start mt-4">
                        Controle suas finanças de forma simples, inteligente
                        e organizada em um só lugar.
                    </p>
                </div>
            </div>

            <div className="w-1/2 flex flex-col justify-center items-center p-16 bg-gray-100">
                <h1 className="text-2xl font-bold mb-6">
                    Cadastro
                </h1>

                <form className="w-full max-w-sm flex flex-col gap-4">
                    <InputName />
                    <InputEmail />
                    <InputPassword />
                    <InputPasswordConfirm />
                    <BtnSingUp />
                </form>

                <p className="mt-4 text-sm">
                    Já tem conta?{" "}
                    <a href="/login" className="text-(--color-primary-300) font-medium">
                        Faça login
                    </a>
                </p>
            </div>

        </div>
    );
};

export default SingUp;
