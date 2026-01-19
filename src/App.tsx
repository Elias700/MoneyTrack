
import './App.css';
//Components
import { Outlet } from 'react-router-dom';
import Layout from './components/Layout/Layout/Layout';

function App() {

  return (
    //  <div className="flex h-screen bg-gray-100">
    //   <Sidebar />

    //   {/* CONTAINER DO CONTEÚDO */}
    //   <main className="flex-1 overflow-y-auto px-10 py-8">
    //     <Outlet />
    //   </main>
    // </div>
    <div className='bg-(--color-neutral-100)'>
      <Layout>
      <Outlet />
    </Layout>
    </div>
  )
};

export default App




