
import './App.css';
//Components
import Sidebar from './components/Layout/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

function App() {

  return (
     <div className="flex h-screen bg-gray-100">
      <Sidebar />

      {/* CONTAINER DO CONTEÚDO */}
      <main className="flex-1 overflow-y-auto px-10 py-8">
        <Outlet />
      </main>
    </div>
  )
}

export default App




