import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import NavBar from '../components/NavBar/NavBar';
import appStore from '../common/stores/appStore';

test('Should load NavBar', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <NavBar />
      </Provider>
    </BrowserRouter>
  );

  const navbar = screen.getByRole('list');
  expect(navbar).toBeInTheDocument();
});

test('Should load Paavamaani with - 0', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <NavBar />
      </Provider>
    </BrowserRouter>
  );

  const name = screen.getByText('Paavamaani - 0');
  expect(name).toBeInTheDocument();
});

test('Should load Paavamaani with - 0', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <NavBar />
      </Provider>
    </BrowserRouter>
  );

  const name = screen.getByText(/Paavamaani/);
  expect(name).toBeInTheDocument();
});
