import { createSlice } from '@reduxjs/toolkit';

import {
  fetchRestaurants,
  fetchUsers,
  fetchUser,
  updateVoteId,
} from '../services/api';

const initialState = {
  restaurants: [],
  voteId: '',
  userId: '',
};
const reducers = {
  setRestaurants(state, { payload: restaurants }) {
    return {
      ...state,
      restaurants,
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

  setUserId(state, { payload: id }) {
    return {
      ...state,
      userId: id,
    };
  },

  setVoteId(state, { payload: id }) {
    return {
      ...state,
      voteId: id,
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
  setUserId,
  setVoteCount,
  resetVoteCount,
  setVoteId,
} = actions;

export function loadRestaurants() {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants();
    const users = await fetchUsers();

    await dispatch(setRestaurants(restaurants));
    await dispatch(setCounts(users));
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

    await dispatch(setUserId(user.id));
    await dispatch(setVoteId(user.voteId));
  };
}

export function sendVoteId(newId) {
  return async (dispatch, getState) => {
    const { userId, voteId } = getState();
    const id = voteId === newId ? '' : newId;

    await updateVoteId({ userId, voteId: id });

    await dispatch(setVoteId(id));
  };
}

export default reducer;
