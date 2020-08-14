import { createSlice } from '@reduxjs/toolkit';

import {
  fetchVoteList,
  fetchMenuList,
  fetchUsers,
  fetchUser,
  updateVoteId,
  addMenu,
} from '../services/api';

const initialState = {
  voteList: [],
  menuList: [],
  voteId: '',
  userId: '',
  newMenu: '',
};
const reducers = {
  setVoteList(state, { payload: voteList }) {
    return {
      ...state,
      voteList,
    };
  },

  setMenuList(state, { payload: menuList }) {
    return {
      ...state,
      menuList,
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
      voteList: state.voteList.map((voteItem) => (
        {
          ...voteItem,
          count: countsObj[voteItem.id] || 0,
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

  setNewMenu(state, { payload: newMenu }) {
    return {
      ...state,
      newMenu,
    };
  },
};

const { actions, reducer } = createSlice({
  name: 'application',
  initialState,
  reducers,
});

export const {
  setVoteList,
  setMenuList,
  setCounts,
  setUserId,
  setVoteCount,
  resetVoteCount,
  setVoteId,
  setNewMenu,
} = actions;

export function loadVoteList() {
  return async (dispatch) => {
    const voteList = await fetchVoteList();
    const users = await fetchUsers();

    dispatch(setVoteList(voteList));
    dispatch(setCounts(users));
  };
}

export function loadMenuList() {
  return async (dispatch) => {
    const menuList = await fetchMenuList();

    dispatch(setMenuList(menuList));
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

    dispatch(setUserId(user.id));
    dispatch(setVoteId(user.voteId));
  };
}

export function sendVoteId(newId) {
  return async (dispatch, getState) => {
    const { userId, voteId } = getState();
    const id = voteId === newId ? '' : newId;

    await updateVoteId({ userId, voteId: id });

    dispatch(setVoteId(id));
  };
}

export function sendNewMenu() {
  return async (dispatch, getState) => {
    const { newMenu } = getState();
    const id = `no${Math.floor(Math.random() * 10000)}`;

    if (!newMenu) {
      return;
    }

    await addMenu({ id, name: newMenu });

    dispatch(setNewMenu(''));
  };
}

export default reducer;
