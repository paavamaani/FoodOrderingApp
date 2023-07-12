import Restaurants from './components/Restaurants/Restaurants';
import NavBar from './components/NavBar/NavBar';

import { resData } from './common/mock/restaurants-mock';

const App = () => {
  return (
    <>
      <NavBar />
      <Restaurants resData={resData} />
    </>
  );
};

export default App;
