import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import Categories from './pages/Categories/Categories.tsx';
import History from './pages/History/History.tsx';
import Account from './pages/Account/Account.tsx';
import Settings from './pages/Settings/Setting.tsx';
import AddExpenses from './pages/AddExpenses/AddExpenses.tsx';
import SingIn from './pages/SingIn/SingIn.tsx';
import SingUp from './pages/SingUp/SingUp.tsx';

const router = createBrowserRouter([
    {
        // Rota principal para o Layout (App)
        path: "/",
        element: <App />, 
        // Sub-rotas que serão renderizadas dentro do <Outlet> do App
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
                element: <Settings />
            },
            {
                path: "addExpenses",
                element: <AddExpenses />
            },
            {
                path: "login",
                element: <SingIn />
            },
            {
                path: "cadastro",
                element: <SingUp />
            }
            
        ]
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
);