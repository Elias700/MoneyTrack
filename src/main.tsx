import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import Categories from './pages/Categories/Categories.tsx';
import History from './pages/History/History.tsx';
import Account from './pages/Account/Account.tsx';
import Settings from './pages/Settings/Settings.tsx';
import AddExpenses from './pages/AddExpenses/AddExpenses.tsx';
import SingIn from './pages/SingIn/SingIn.tsx';
import SingUp from './pages/SingUp/SingUp.tsx';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword.tsx';
import { Profile } from './pages/Settings/Profile.tsx';


const router = createBrowserRouter([
    //  Rota de Layout Principal (Com Sidebar)
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "account",
                element: <Account />
            },
            {
                path: "history",
                element: <History />
            },
            {
                path: "categories",
                element: <Categories />
            },
            {
                path: "settings",
                element: <Settings />,
                children: [
                    {
                        index: true,
                        element: (
                            <div className="p-6 text-gray-500">
                                Selecione uma opção de configuração
                            </div>
                        )
                    },
                    { path: "profile", element: <Profile /> },
                    // { path: "security", element: <Security /> },
                    // { path: "currency", element: <Currency /> },
                    // { path: "categories", element: <SettingsCategories /> },
                    // { path: "help", element: <Help /> },
                    // { path: "about", element: <About /> },
                    // { path: "version", element: <Version /> },
                    // { path: "theme", element: <Theme /> },
                    // { path: "notifications", element: <Notifications /> },
                ]
            },
            {
                path: "addExpenses",
                element: <AddExpenses />
            },
        ]
    },

    {
        path: "/login",
        element: <SingIn />
    },
    {
        path: "/cadastro",
        element: <SingUp />
    },
    {
        path: "/recuperar-senha",
        element: <ForgotPassword />
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);