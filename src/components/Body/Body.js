import { useEffect, useState } from 'react';

import './Body.css';

import '../../common/mock/restaurants';
import { RESTAURANTS_API } from '../../common/constants';

import FilterBar from '../FilterBar/FilterBar';
import Restaurants from '../Restaurants/Restaurants';
import Shimmer from '../Shimmer/Shimmer';

const Body = () => {
  const [restaurantsData, setRestaurantsData] = useState([]);

  const onClickRating = () => {
    const topRestaurants = restaurantsData.filter((restaurant) => {
      return restaurant.info.avgRating >= 4;
    });

    setRestaurantsData(topRestaurants);
  };

  const onClickDeliveryTime = () => {
    fetchRestaurants();
    const fastDeliveryRestaurants = [...restaurantsData].sort((res1, res2) => {
      return res1.info.sla.deliveryTime - res2.info.sla.deliveryTime;
    });

    setRestaurantsData(fastDeliveryRestaurants);
  };

  const onClickRelevance = () => {
    setRestaurantsData([]);
    fetchRestaurants();
  };

  const fetchRestaurants = async () => {
    const data = await fetch(RESTAURANTS_API);
    const response = await data.json();

    setRestaurantsData(response);
  };

  const onSearch = (event) => {
    const restaurantName = event.currentTarget.value;

    if (restaurantName) {
      const searchResults = restaurantsData.filter((restaurant) => {
        return restaurant?.info?.name
          ?.toLowerCase()
          .includes(restaurantName.toLowerCase());
      });
      if (searchResults.length > 0) setRestaurantsData(searchResults);
    } else {
      fetchRestaurants();
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  if (restaurantsData.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className='body'>
      <FilterBar
        totalRestaurants={restaurantsData.length}
        onClickRelevance={onClickRelevance}
        onClickDeliveryTime={onClickDeliveryTime}
        onClickRating={onClickRating}
        onSearch={onSearch}
      />
      <Restaurants restaurantsData={restaurantsData} />
    </div>
  );
};

export default Body;
