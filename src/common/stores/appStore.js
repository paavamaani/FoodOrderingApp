import { configureStore } from '@reduxjs/toolkit';

import restaurantSlice from './restaurantSlice';

const appStore = configureStore({
  reducer: {
    restaurant: restaurantSlice,
  },
});

export default appStore;
