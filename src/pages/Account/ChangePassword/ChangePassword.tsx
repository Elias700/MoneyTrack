import { FaArrowLeft } from "react-icons/fa";
import { Button } from "../../../components/UI/Buttons/Buttons";
import { InputChangePassword } from "../../../components/UI/Inputs";

export const ChangePassword = () => {
    return (
        <main>
            <div
                className="
                    flex 
                    gap-2 
                    pb-5
                "
            >
                <FaArrowLeft
                    className="text-(--color-primary-300)"
                />
                <a
                    href="/account"
                    className="text-(--color-primary-300) hover:underline"
                >
                    Voltar para configurações de conta
                </a>
            </div>


            <h1
                className="
                    text-5xl
                    font-bold 
                    text-(--color-primary-300)
                    mb-10
                "
            >
                Alterar a Senha
            </h1>

            <section className="h-100 flex flex-col items-center justify-center gap-5">

                <p className="text-(--color-primary-500)">
                    Digite seu e-mail cadastrado e enviaremos um link para você redefinir sua senha.
                </p>

                <div className="max-w-md w-full">
                    <InputChangePassword />
                </div>

                <Button variant="primary">
                    Enviar link
                </Button>

            </section>
        </main>
    )
};