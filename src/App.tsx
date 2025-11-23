
import './App.css';
//Components
import Sidebar from './components/Layout/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default App




