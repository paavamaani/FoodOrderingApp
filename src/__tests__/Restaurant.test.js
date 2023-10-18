import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import NavBar from '../components/NavBar/NavBar';
import Body from '../components/Body/Body';
import appStore from '../common/stores/appStore';

test('Should render restaurant on enter input', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <NavBar />
        <Body />
      </Provider>
    </BrowserRouter>
  );

  const textbox = screen.getByRole('searchbox');

  fireEvent.change(textbox, { currentTarget: { value: 'Louis Burger' } });

  const restaurant = screen.getAllByText('Louis Burger');

  expect(restaurant.length).toBe(1);
});
