import './Restaurants.css';

import Restaurant from '../Restaurant/Restaurant';

const Restaurants = (props) => {
  const { restaurantsData } = props;

  return (
    <div className='restaurants-wrapper'>
      {restaurantsData.map((restaurant) => {
        return <Restaurant key={restaurant.info.id} restaurant={restaurant} />;
      })}
    </div>
  );
};

export default Restaurants;
