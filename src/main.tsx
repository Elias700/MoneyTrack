// Main.tsx (ou index.tsx) CORRIGIDO

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// 1. Corrigido: Removida a importação do ícone Home, que estava causando o conflito.
// import { Home } from 'lucide-react' 

// 2. Adicionado o import do SEU componente de página Home:
import HomePage from './pages/Home/Home.tsx' // <<-- Importe o seu componente de página Home (Renomeei para HomePage para clareza)
import Categories from './pages/Categories/Categories.tsx'


const router = createBrowserRouter([
    {
        // Rota principal para o Layout (App)
        path: "/",
        element: <App />, 
        // Sub-rotas que serão renderizadas dentro do <Outlet> do App
        children: [
            {
                index: true, // Corresponde ao path: "/"
                element: <HomePage />, // <<-- USANDO AGORA O COMPONENTE CORRETO
            },
            {
                path: "categories", // Corresponde ao path: "/categories"
                element: <Categories />
            },
            // Adicione outras rotas aqui (Ex: /historico, /configuracoes)
        ]
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
);