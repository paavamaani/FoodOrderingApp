import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import appStore from '../common/stores/appStore';
import { restaurantsData } from '../common/mock/data/restaurants-data';
import Restaurants from '../components/Restaurants/Restaurants';

test('Should render restaurant', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Restaurants restaurantsData={restaurantsData} />
      </Provider>
    </BrowserRouter>
  );

  const restaurant = screen.getByAltText('Burger King');
  expect(restaurant).toBeInTheDocument();
});

test('Should render restaurant with promotion', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Restaurants restaurantsData={restaurantsData} />
      </Provider>
    </BrowserRouter>
  );

  const restaurant = screen.getByText('Promoted');
  expect(restaurant).toBeInTheDocument();
});
