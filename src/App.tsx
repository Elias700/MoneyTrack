
import './App.css';
//Components
import { Outlet } from 'react-router-dom';
import Layout from './components/Layout/Layout/Layout';

function App() {

  return (

    <div className='bg-(--color-neutral-100)'>
      <Layout>
        <Outlet />
      </Layout>
    </div>

  )
};

export default App




