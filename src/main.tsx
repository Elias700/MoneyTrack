import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home/Home.tsx';
import Categories from './pages/Categories/Categories.tsx';
import History from './pages/History/History.tsx';


const router = createBrowserRouter([
    {
        // Rota principal para o Layout (App)
        path: "/",
        element: <App />, 
        // Sub-rotas que serão renderizadas dentro do <Outlet> do App
        children: [
            {
                index: true,
                element: <HomePage />, 
            },
            {
                path: "categories", 
                element: <Categories />
            },
            {
                path: "history",
                element: <History />
            }
        ]
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
);