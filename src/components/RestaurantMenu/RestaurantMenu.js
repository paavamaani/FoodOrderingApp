import { useParams } from 'react-router-dom';

import './RestaurantMenu.css';

import Shimmer from '../Shimmer/Shimmer';
import useFetchRestaurant from '../../common/utils/useFetchRestaurant';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const response = useFetchRestaurant(resId);

  if (Object.keys(response).length === 0) return <Shimmer />;

  return (
    <>
      <h1> {response.name}</h1>
      <p>Rs. {response.price}</p>
      <ul>
        {response.menu.map((item, index) => {
          return <li key={index}> {item} </li>;
        })}
      </ul>
    </>
  );
};

export default RestaurantMenu;
