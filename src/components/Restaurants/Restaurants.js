import './Restaurants.css';

import Restaurant from '../Restaurant/Restaurant';

const Restaurants = (props) => {
  const { resData } = props;

  return (
    <div className='restaurants-wrapper'>
      {resData.map((restaurant) => {
        return <Restaurant key={restaurant.data.id} restaurant={restaurant} />;
      })}
    </div>
  );
};

export default Restaurants;
