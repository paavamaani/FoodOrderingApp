import { useContext } from 'react';
import { Provider } from 'react-redux';

import NavBar from './components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import UserContext from './common/contexts/UserContext';
import appStore from './common/stores/appStore';

const App = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: loggedInUser }}>
        {/**
         * we can just use useContext to use the context.
         * The Context.Provider is used to update the value or pass the same value.
         * But, when the components inside the Context.Provider wrapper use useContext they receive context value from nearest wrapper.
         */}
        <NavBar />
        <Outlet />
      </UserContext.Provider>
    </Provider>
  );
};

export default App;
