import { createSlice } from '@reduxjs/toolkit';

import {
  fetchRestaurants,
  fetchUsers,
  fetchUser,
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

  setVoteId(state, { payload: id }) {
    return {
      ...state,
      voteId: id,
    };
  },

  setCounts(state, { payload: users }) {
    const countsObj = {};
    users.forEach((count) => {
      countsObj[count.voteId] = countsObj[count.voteId] === undefined
        ? 1
        : countsObj[count.voteId] + 1;
    });

    return {
      ...state,
      restaurants: state.restaurants.map((restaurant) => (
        {
          ...restaurant,
          count: countsObj[restaurant.id] || 0,
        }
      )),
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
  setCounts,
  setVoteCount,
  resetVoteCount,
  setVoteId,
} = actions;

export function loadRestaurants() {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants();

    dispatch(setRestaurants(restaurants));
  };
}

export function loadUsers() {
  return async (dispatch) => {
    const users = await fetchUsers();

    dispatch(setCounts(users));
  };
}

export function loadUser(userId) {
  return async (dispatch) => {
    const user = await fetchUser(userId);

    dispatch(setVoteId(user.voteId));
  };
}

export function setSingleVote(id, voteId) {
  return (dispatch) => {
    if (voteId) {
      dispatch(resetVoteCount(voteId));
    }

    if (voteId !== id) {
      dispatch(setVoteCount(id));
    }
  };
}

export default reducer;
