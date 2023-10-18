import { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import App from './App';
import Body from './components/Body/Body';
import RestaurantMenu from './components/RestaurantMenu/RestaurantMenu';
import Demo from './components/Demo/DemoMemo';
import DemoWithoutMemo from './components/Demo/DemoWithoutMemo';
import DemoWithUseRef from './components/Demo/DemoWithUseRef';
import Error from './components/Error/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));

const About = lazy(() => import('./components/About/About'));
const Contact = lazy(() => import('./components/Contact/Contact'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<h1> Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: (
          <Suspense fallback={<h1> Loading...</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu />,
      },
      {
        path: '/demo',
        element: (
          <>
            <Demo />
            <DemoWithoutMemo />
            <DemoWithUseRef />
          </>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
