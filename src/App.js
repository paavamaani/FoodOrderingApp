import NavBar from './components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default App;
