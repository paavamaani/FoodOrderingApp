import './Restaurant.css';

import { IoStar } from 'react-icons/io5';

import { CDN_URL } from '../../common/constants';

const Restaurant = (props) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    deliveryTime,
    avgRating,
  } = props.restaurant?.data;

  return (
    <>
      <div className='restaurant-wrapper'>
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
              <div className='delivery-time'>{deliveryTime} mins</div>
              <div>•</div>
              <div className='cost'>₹{costForTwo / 100} FOR TWO</div>
            </div>
          </div>
          <div className='button-wrapper'>
            <span className='button'>QUICK VIEW</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
