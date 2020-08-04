import { createSlice } from '@reduxjs/toolkit';

import {
  fetchRestaurants,
} from '../services/api';

const initialState = {
  restaurants: [],
};
const reducers = {
  setRestaurants(state, { payload: restaurants }) {
    return {
      ...state,
      restaurants,
    };
  },
};

const { actions, reducer } = createSlice({
  name: 'application',
  initialState,
  reducers,
});

export const {
  setRestaurants,
} = actions;

export function loadRestaurants() {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants();

    dispatch(setRestaurants(restaurants));
  };
}

export default reducer;
