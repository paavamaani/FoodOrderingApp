import './Body.css';

import FilterBar from '../FilterBar/FilterBar';
import Restaurants from '../Restaurants/Restaurants';
import { resData } from '../../common/mock/restaurants-mock';

import { useState } from 'react';

const Body = () => {
  const [restaurantsData, setRestaurantsData] = useState(resData);

  const onClickRating = () => {
    const topRestaurants = resData.filter((restaurant) => {
      return restaurant.data.avgRating >= 4;
    });

    setRestaurantsData(topRestaurants);
  };

  const onClickDeliveryTime = () => {
    const fastDeliveryRestaurants = [...resData].sort((res1, res2) => {
      return res1.data.deliveryTime - res2.data.deliveryTime;
    });

    setRestaurantsData(fastDeliveryRestaurants);
  };

  const onClickRelevance = () => {
    setRestaurantsData(resData);
  };

  return (
    <div className='body'>
      <FilterBar
        totalRestaurants={restaurantsData.length}
        onClickRelevance={onClickRelevance}
        onClickDeliveryTime={onClickDeliveryTime}
        onClickRating={onClickRating}
      />
      <Restaurants restaurantsData={restaurantsData} />
    </div>
  );
};

export default Body;
