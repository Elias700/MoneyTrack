// index.tsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx'; // Componente Layout (com Sidebar)
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import Categories from './pages/Categories/Categories.tsx';
import History from './pages/History/History.tsx';
import Account from './pages/Account/Account.tsx';
import Settings from './pages/Settings/Setting.tsx';
import AddExpenses from './pages/AddExpenses/AddExpenses.tsx';
import SingIn from './pages/SingIn/SingIn.tsx';
import SingUp from './pages/SingUp/SingUp.tsx';
// Não é necessário criar um novo layout para as rotas sem Sidebar,
// pois o elemento pode ser o próprio componente <SingIn /> ou <SingUp />

const router = createBrowserRouter([
    // 1. Rota de Layout Principal (Com Sidebar)
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
                element: <Settings />
            },
            {
                path: "addExpenses",
                element: <AddExpenses />
            },
            // As rotas de login/cadastro foram removidas daqui
        ]
    },
    
    // 2. Novas Rotas Independentes (Sem Sidebar)
    // Elas não usam o componente <App /> como layout
    {
        path: "/login",
        element: <SingIn /> // Renderiza apenas SingIn, sem Sidebar
    },
    {
        path: "/cadastro",
        element: <SingUp /> // Renderiza apenas SingUp, sem Sidebar
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
);