import './FilterBar.css';

const FilterBar = (props) => {
  const {
    totalRestaurants,
    onClickRelevance,
    onClickDeliveryTime,
    onClickRating,
  } = props;

  return (
    <div className='filter-bar'>
      <div className='total-restaurants'>{totalRestaurants} restaurants</div>
      <ul className='filter-items'>
        <li className='filter-item' onClick={onClickRelevance}>
          Relevance
        </li>
        <li className='filter-item' onClick={onClickDeliveryTime}>
          Delivery Time
        </li>
        <li className='filter-item' onClick={onClickRating}>
          Rating
        </li>
      </ul>
    </div>
  );
};

export default FilterBar;
