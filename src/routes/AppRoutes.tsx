
import { createBrowserRouter } from 'react-router-dom';

// Layout
import App from '../App.tsx';

// Pages
import Home from '../pages/Home/Home.tsx';
import Account from "../pages/Account/Account";
import History from "../pages/History/History";
import Categories from "../pages/Categories/Categories";
import Settings from "../pages/Settings/index.tsx";
import { Profile } from "../pages/Settings/Profile/Profile.tsx";
import AddExpenses from "../pages/AddExpenses/AddExpenses";
import SingIn from "../pages/SingIn/SingIn";
import SingUp from "../pages/SingUp/SingUp";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import { Security } from '../pages/Settings/Security/Security.tsx';
import { AboutApp } from '../pages/Settings/AboutApp/AboutApp.tsx';
import { CurrencySettings } from '../pages/Settings/CurrencySettings/CurrencySettings.tsx';
import { Help } from '../pages/Settings/Help/Help.tsx';
import { NotificationSettings } from '../pages/Settings/NotificationSettings/NotificationSettings.tsx';
import { ThemeSettings } from '../pages/Settings/ThemeSettings/ThemeSettings.tsx';
import { CategoriesSettings } from '../pages/Settings/CategoriesSettings/CategoriesSettings.tsx';
import NotFound from '../pages/NotFound/NotFoun.tsx';

export const router = createBrowserRouter([
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
            },
            {
                path: "settings/profile",
                element: <Profile />
            },
            {
                path: "settings/security",
                element: <Security />
            },
            {
                path: "settings/about",
                element: <AboutApp />
            },
            {
                path: "settings/currency",
                element: <CurrencySettings />
            },
            {
                path: "settings/help",
                element: <Help />
            },
            {
                path: "settings/notificationSettings",
                element: <NotificationSettings />
            },
            {
               path: "settings/theme",
               element: <ThemeSettings /> 
            },
            {
                path: "settings/categoriesSettings",
                element: <CategoriesSettings />
            },
            {
                path: "addExpenses",
                element: <AddExpenses />
            },
            {
                path: "*",
                element: <NotFound />
            }
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