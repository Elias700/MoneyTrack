import bgLogin from "../../assets/Login-background.png";
import { Button } from "../../components/UI/Buttons/Buttons";
import { 
    InputEmail, 
    InputName, 
    InputPassword, 
    InputPasswordConfirm 
} from "../../components/UI/Inputs";


const SingUp = () => {
    return (
        <div
            className="
                    flex 
                    h-screen 
                    w-full
                "
        >

            <div
                className="
                    hidden 
                    md:flex 
                    md:w-1/2 
                    relative 
                    bg-cover 
                    bg-center 
                    bg-no-repeat 
                    items-center 
                    justify-center
                "
                style={{
                    backgroundImage: `url(${bgLogin})`,
                }}
            >
                
                <div
                    className="
                            absolute 
                            inset-0 
                            bg-black/50
                        "
                />

                <div
                    className="
                            relative 
                            z-10 
                            text-white 
                            px-8 w-full 
                            max-w-sm mb-12
                        "
                >

                    <h1
                        className="
                            text-6xl 
                            font-bold 
                            flex 
                            items-center 
                            text-(--color-neutral-200)
                        "
                    >
                        Money<span className="text-(--color-primary-300)">Track</span>
                    </h1>

                    <p
                        className="
                                mt-4
                                text-lg 
                                text-(--color-neutral-200) 
                                self-start 
                            "
                    >
                        Controle suas finanças de forma simples, inteligente
                        e organizada em um só lugar.
                    </p>
                </div>
            </div>

            <div
                className="
                        w-full 
                        md:w-1/2 
                        flex 
                        flex-col 
                        justify-center 
                        items-center
                        px-6 
                        py-12 
                        md:p-16 
                        bg-(--color-neutral-100)
                    "
            >
                <h1
                    className="
                            mb-10
                            text-3xl 
                            font-semibold 
                            text-(--color-primary-300) 
                        "
                >
                    Cadastro
                </h1>

                <form
                    className="
                            w-full 
                            max-w-sm 
                            flex 
                            flex-col 
                            gap-4
                        "
                >
                    <InputName />
                    <InputEmail />
                    <InputPassword />
                    <InputPasswordConfirm />

                    <Button variant="primary" size="lg" full type="submit" className="mt-6">
                        Cadastrar
                    </Button>

                </form>

                <p className="mt-4 text-sm">
                    Já tem conta?{" "}
                    <a
                        href="/login"
                        className="text-(--color-primary-300) font-medium">
                        Faça login
                    </a>
                </p>
            </div>

        </div>
    );
};

export default SingUp;
