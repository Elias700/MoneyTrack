
import './App.css';
//Components
import Sidebar from './components/Layout/Sidebar/Sidebar';
import Home from './pages/Home/Home';

function App() {
  

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <Home />
      </main>
    </div>
  )
}

export default App




