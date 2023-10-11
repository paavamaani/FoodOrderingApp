import { Link } from 'react-router-dom';

import './Restaurant.css';

import { IoStar } from 'react-icons/io5';

import { CDN_URL } from '../../common/constants';

const Restaurant = (props) => {
  const { id, name, cloudinaryImageId, cuisines, costForTwo, sla, avgRating } =
    props.restaurant?.info;

  return (
    <Link id={id} className='restaurant-wrapper' to={`/restaurant/${id}`}>
      <div className='restaurant-content'>
        <div className='restaurant'>
          <div className='restaurant-image'>
            <img
              src={CDN_URL + cloudinaryImageId}
              width='254'
              height='160'
              alt={name}
            />
          </div>
          <div className='info'>
            <div className='name'>{name}</div>
            <div className='cuisines'>{cuisines.join(', ')}</div>
          </div>
          <div className='rating'>
            <div className={avgRating >= 4 ? 'icon green' : 'icon orange'}>
              <span className='star'>
                <IoStar size='10' color='white' />
              </span>
              <span>{avgRating}</span>
            </div>
            <div>•</div>
            <div className='delivery-time'>{sla.deliveryTime} mins</div>
            <div>•</div>
            <div className='cost'>{costForTwo}</div>
          </div>
        </div>
        <div className='button-wrapper'>
          <span className='button'>QUICK VIEW</span>
        </div>
      </div>
    </Link>
  );
};

export const promotedRestaurant = (Restaurant) => {
  return (props) => {
    return (
      <>
        <p className='promoted'> Promoted </p>
        <Restaurant {...props} />
      </>
    );
  };
};

export default Restaurant;
