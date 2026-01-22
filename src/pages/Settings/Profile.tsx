import { useState } from "react";
import { InputSettingsProfileName } from "../../components/UI/Inputs/index.tsx";
import { Button } from "../../components/UI/Buttons/Buttons";
import { InputSettingsProfileEmail } from "../../components/UI/Inputs/index";
import { InputSettingsProfileUser } from "../../components/UI/Inputs/index";
import { FaArrowLeft } from "react-icons/fa";


export const Profile = () => {
    const [image, setImage] = useState<File | null>(null);

    function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (file) {
            setImage(file);
        }
    }

    return (
        <div className="pb-20">

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
                    href="/settings"
                    className="text-(--color-primary-300) hover:underline"
                >
                    Voltar para configurações
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
                Perfil
            </h1>

            <div
                className="
                        flex 
                        flex-col 
                        items-center 
                        mb-12
                    "
            >

                <input
                    id="category-image"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                />

                <label
                    htmlFor="category-image"
                    className="
                        w-28
                        h-28 
                        mb-4 
                        flex 
                        items-center 
                        justify-center
                        rounded-full
                        cursor-pointer
                        overflow-hidden
                        border-1
                        border-(--color-primary-300)
                    "
                >
                    {image ? (
                        <img
                            src={URL.createObjectURL(image)}
                            alt="Preview"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <span className="
                                px-2 
                                text-sm 
                                text-center 
                                text-(--color-primary-300)
                            "
                        >
                            Adicionar imagem
                        </span>
                    )}
                </label>

            </div>

            <hr className="my-12 border-(--color-primary-300)/30" />

            <form
                className="
                    flex flex-col gap-6
                    w-full max-w-xl
                    mx-auto
                    mb-16
                "
            >
                <label
                    className="
                            flex 
                            flex-col 
                            gap-2
                            text-(--color-primary-300)
                            font-semibold
                        "
                >
                    Nome completo
                    <InputSettingsProfileName />
                </label>

                <label
                    className="
                            flex 
                            flex-col 
                            gap-2
                            text-(--color-primary-300)
                        "
                >
                    Email
                    <InputSettingsProfileEmail />
                </label>

                <label
                    className="
                            flex 
                            flex-col 
                            gap-2
                            text-(--color-primary-300)
                        "
                >
                    Nome de usuário
                    <InputSettingsProfileUser />
                </label>
            </form>

            <hr className="my-12 border-(--color-primary-300)/30" />

            <div
                className="
                        flex 
                        justify-center 
                        gap-8
                    "
            >

                <Button variant="outline">
                    Editar
                </Button>

                <Button variant="primary">
                    Salvar alterações
                </Button>

            </div>

        </div>
    );
};
