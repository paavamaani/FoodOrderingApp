import { createSlice } from '@reduxjs/toolkit';

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    items: [],
  },
  reducers: {
    addName: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addName } = restaurantSlice.actions;
export default restaurantSlice.reducer;
