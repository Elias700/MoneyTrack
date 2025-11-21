
import './App.css'

function App() {
  

  return (
    <div className='bg-red-600'>
      
    <h1 className='text-green-600'>OLA MUNDO</h1>

    </div>
  )
}

export default App


// ESTRUTURA DE PASTAS
// MoneyTrack-Frontend/
// │
// ├── src/
// │   ├── assets/              
// │   │   └── images/          # Logos, ilustrações, ícones não react
// │   │
// │   ├── components/          # Componentes reutilizáveis
// │   │   ├── Header.jsx
// │   │   ├── Footer.jsx
// │   │   ├── Sidebar.jsx
// │   │   ├── Button.jsx
// │   │   └── Card.jsx
// │   │
// │   ├── pages/               # Páginas da aplicação
// │   │   ├── Login.jsx
// │   │   ├── Register.jsx
// │   │   ├── Home.jsx
// │   │   ├── AddExpense.jsx
// │   │   ├── Categories.jsx
// │   │   ├── History.jsx
// │   │   ├── Settings.jsx
// │   │   └── Account.jsx
// │   │
// │   ├── hooks/               # Custom Hooks
// │   │   └── useAuth.jsx
// │   │
// │   ├── services/            # API (axios ou fetch)
// │   │   └── api.js
// │   │
// │   ├── context/             # Context API (auth, theme, expenses)
// │   │   └── AuthContext.jsx
// │   │
// │   ├── utils/               # Funções auxiliares
// │   │   └── formatCurrency.js
// │   │
// │   ├── styles/              # Estilos globais Tailwind + config css
// │   │   └── main.css
// │   │
// │   ├── App.jsx
// │   └── main.jsx
// │
// ├── public/                  
// │
// ├── index.html
// ├── package.json
// └── tailwind.config.js

