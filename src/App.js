import { useContext } from 'react';

import NavBar from './components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import UserContext from './common/contexts/UserContext';

const App = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <>
      <UserContext.Provider value={{ loggedInUser: loggedInUser }}>
        {/**
         * we can just use useContext to use the context.
         * The Context.Provider is used to update the value or pass the same value.
         * But, when the components inside the Context.Provider wrapper use useContext they receive context value from nearest wrapper.
         */}
        <NavBar />
        <Outlet />
      </UserContext.Provider>
    </>
  );
};

export default App;
