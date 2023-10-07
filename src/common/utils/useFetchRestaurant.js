import { useState, useEffect } from 'react';

import '../../common/mock/restaurant';
import { RESTAURANT_API } from '../../common/constants';

const useFetchRestaurant = (resId) => {
  const [response, setResponse] = useState({});

  const fetchRestaurantMenu = async () => {
    const data = await fetch(RESTAURANT_API + resId);
    const result = await data.json();

    setResponse(result.data);
  };

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  return response;
};

export default useFetchRestaurant;
