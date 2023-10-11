import './Restaurants.css';

import Restaurant, { promotedRestaurant } from '../Restaurant/Restaurant';

const Restaurants = (props) => {
  const { restaurantsData } = props;

  const RestaurantWithPromotion = promotedRestaurant(Restaurant);

  return (
    <div className='restaurants-wrapper'>
      {restaurantsData.map((restaurant) => {
        return restaurant.info.promoted ? (
          <RestaurantWithPromotion
            key={restaurant.info.id}
            restaurant={restaurant}
          />
        ) : (
          <Restaurant key={restaurant.info.id} restaurant={restaurant} />
        );
      })}
    </div>
  );
};

export default Restaurants;
