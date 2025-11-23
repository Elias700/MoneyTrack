
import './App.css';
//Components
import Sidebar from './components/Layout/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
function App() {
  

  return (
    <div className="flex h-screen overflow-hidden">
            {/* Sidebar é estática e sempre visível */}
            <Sidebar />
            
            {/* O Outlet renderiza o componente de rota correspondente (Home, Categories, etc.) */}
            {/* O componente renderizado aqui deve ter 'flex-1' para ocupar o espaço restante. */}
            <Outlet /> 
        </div>
  )
}

export default App




