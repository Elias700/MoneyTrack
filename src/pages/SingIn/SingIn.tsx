
import { Link } from 'react-router-dom';
import bgLogin from '../../assets/Login-background.png';
import { Button } from '../../components/UI/Buttons/Buttons';
import { FiMail, FiLock } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


const SingIn = () => {
    return (
        <div className="
                flex
                flex-col
                lg:flex-row
                h-screen
                w-full
            "
        >

            <div
                className="
                    hidden
                    lg:flex
                    lg:w-1/2
                    p-16
                    flex-col 
                    justify-center 
                    items-center 
                    bg-cover 
                    bg-center 
                    bg-no-repeat
                "
                style={{
                    backgroundImage: `url(${bgLogin})`,
                }}
            >

                <div
                    className="
                            w-full 
                            max-w-sm 
                            mb-12
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
                </div>

                <div>
                    <h2 className="
                            text-4xl 
                            text-center 
                            text-(--color-neutral-200) 
                            font-light 
                            mb-6 self-start
                        "
                    >
                        Seja bem vindo!
                    </h2>

                    <p
                        className="
                            text-lg 
                            text-(--color-neutral-200) 
                            self-start
                        "
                    >
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                    </p>
                </div>
            </div>


            <div
                className="
                    p-6
                    sm:p-10
                    lg:p-16

                    w-full
                    lg:w-1/2

                    bg-(--color-neutral-100)
                    flex 
                    flex-col 
                    justify-center 
                    items-center  
                "
            >

                <h2
                    className="
                            mb-10
                            text-3xl 
                            font-semibold 
                            text-(--color-primary-300)
                        "
                >
                    Acesse sua conta
                </h2>

                <form
                    action=""
                    className="
                            w-full 
                            max-w-xs
                        "
                >

                    <div
                        className="
                                mb-6
                                relative 
                                text-(--color-primary-500) 
                                focus-within:text-text-(--color-primary-500)
                            "
                    >
                        <div
                            className="
                                    absolute 
                                    inset-y-0 
                                    left-0 
                                    flex 
                                    items-center 
                                    pl-3 
                                    pointer-events-none
                                "
                        >

                            <FiMail
                                size={18}
                                className='text-(--color-primary-300)'
                            />

                        </div>
                        <input
                            type="email"
                            id="email-input"
                            placeholder="Digite seu email"
                            className="
                                block w-full h-11 pr-5 pl-12 py-2.5
                                text-base font-normal shadow-sm

                                text-[var(--color-primary-500)]
                                bg-[var(--color-neutral-200)]
                                border border-[var(--color-primary-300)]
                                rounded-lg

                                placeholder:text-(--color-primary-300)
                                placeholder:opacity-100

                                focus:border-[var(--color-primary-500)]
                                focus:outline-none
                            "
                        />
                    </div>

                    <div
                        className="
                                mb-2
                                relative 
                                text-gray-500 
                                focus-within:text-gray-900
                            "
                    >
                        <div
                            className="
                                    pl-3 
                                    absolute 
                                    inset-y-0 
                                    left-0 
                                    flex 
                                    items-center                                   
                                    pointer-events-none
                                "
                        >
                            <FiLock
                                size={18}
                                className='text-(--color-primary-300)'
                            />

                        </div>
                        <input
                            type="password"
                            id="password-input"
                            placeholder="Senha"
                            className="
                                block w-full h-11 pr-5 pl-12 py-2.5
                                text-base font-normal shadow-sm

                                text-[var(--color-primary-500)]
                                bg-[var(--color-neutral-200)]
                                border border-[var(--color-primary-300)]
                                rounded-lg

                                placeholder:text-[var(--color-primary-300)]
                                placeholder:opacity-100

                                focus:border-[var(--color-primary-500)]
                                focus:outline-none
                            "
                        />
                    </div>

                    <div
                        className="
                                flex 
                                justify-start 
                                w-full 
                                mb-6
                            "
                    >
                        <Link
                            to="/recuperar-senha"
                            className="
                                    text-sm 
                                    text-(--color-primary-300)
                                "
                        >
                            Esqueceu sua senha?
                            <a
                                href='/recuperar-senha'
                                className="text-(--color-primary-600) font-medium">Recuperar</a>
                        </Link>
                    </div>

                    <div className="flex mb-8">
                        <Button variant="primary" size="lg" full>
                            Entrar
                        </Button>
                    </div>

                    <div
                        className="
                                flex 
                                w-full 
                                items-center 
                                space-x-4 
                                mt-4 mb-4
                            "
                    >
                        <div
                            className="
                                flex-1 
                                border-b 
                                border-(--color-primary-200)
                                "
                        >
                        </div>
                        <span
                            className="
                                px-3
                                flex 
                                items-center 
                                justify-center 
                                text-(--color-primary-200) 
                                text-sm 
                                font-normal 
                                leading-7
                            "
                        >
                            OU
                        </span>

                        <div
                            className="
                                    flex-1 
                                    border-b 
                                    border-(--color-primary-200)
                                "
                        >
                        </div>

                    </div>

                    <p
                        className="
                            text-(--color-primary-300) 
                            text-center 
                            text-base 
                            font-medium 
                            leading-6 mb-4
                            "
                    >
                        Entrar com redes sociais
                    </p>

                    <div
                        className="
                                mb-8
                                flex 
                                items-center 
                                justify-center 
                                gap-x-3
                            "
                    >

                        <a
                            href="javascript:;"
                            className="
                                    relative 
                                    w-9 h-9 
                                    rounded-full 
                                    transition-all 
                                    duration-500 
                                    flex 
                                    justify-center 
                                    items-center 
                                    bg-(--color-primary-300) 
                                    hover:bg-(--color-primary-400)
                                "
                        >
                            <FaFacebookF
                                className="text-(--color-neutral-200)"
                            />
                        </a>

                        <a
                            href="javascript:;"
                            className="
                                    relative 
                                    w-9 h-9 
                                    rounded-full 
                                    transition-all 
                                    duration-500 
                                    flex 
                                    justify-center 
                                    items-center 
                                    bg-(--color-primary-300) 
                                    hover:bg-(--color-primary-400)
                                "
                        >
                            <FaTwitter
                                className="text-(--color-neutral-200)"
                            />
                        </a>

                        <a
                            href="javascript:;"
                            className="
                                relative 
                                w-9 h-9 
                                rounded-full 
                                transition-all 
                                duration-500 
                                flex 
                                justify-center 
                                items-center 
                                bg-(--color-primary-300) 
                                hover:bg-(--color-primary-400)
                            "
                        >
                            <FaInstagram
                                className="text-(--color-neutral-200)"
                            />
                        </a>
                    </div>

                    <p
                        className="
                                text-center 
                                text-sm 
                                text-(--color-primary-300)
                            "
                    >
                        Não tem conta?
                        <Link
                            to="/cadastro"
                            className="
                                    text-(--color-primary-500) 
                                    font-medium ml-1
                                "
                        >
                            Cadastre-se
                        </Link>
                    </p>

                </form>
            </div>
        </div>
    )
};

export default SingIn;