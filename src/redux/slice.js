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
  setVoteCount(state, { payload: id }) {
    const newRestaurants = [...state.restaurants];
    const restaurantIndex = newRestaurants.findIndex((restaurant) => restaurant.id === id);
    newRestaurants[restaurantIndex] = {
      ...newRestaurants[restaurantIndex], count: newRestaurants[restaurantIndex].count + 1,
    };
    return {
      ...state,
      restaurants: newRestaurants,
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
  setVoteCount,
} = actions;

export function loadRestaurants() {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants();

    dispatch(setRestaurants(restaurants));
  };
}

export default reducer;
