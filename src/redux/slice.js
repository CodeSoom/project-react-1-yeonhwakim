import { createSlice } from '@reduxjs/toolkit';

import {
  fetchRestaurants,
} from '../services/api';

const initialState = {
  restaurants: [],
  voteId: '',
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
      voteId: id,
      restaurants: newRestaurants,
    };
  },
  resetVoteCount(state, { payload: id }) {
    const newRestaurants = [...state.restaurants];
    const restaurantIndex = newRestaurants.findIndex((restaurant) => restaurant.id === id);
    newRestaurants[restaurantIndex] = {
      ...newRestaurants[restaurantIndex], count: newRestaurants[restaurantIndex].count - 1,
    };
    return {
      ...state,
      voteId: '',
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
  resetVoteCount,
} = actions;

export function loadRestaurants() {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants();

    dispatch(setRestaurants(restaurants));
  };
}

export function setSingleVote(id, voteId) {
  return (dispatch) => {
    if (voteId) {
      dispatch(resetVoteCount(voteId));
    }
    dispatch(setVoteCount(id));
  };
}

export default reducer;
