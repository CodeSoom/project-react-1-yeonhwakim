import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';

import {
  fetchRoomList,
  fetchVoteList,
  fetchMenuList,
  fetchUsers,
  fetchUser,
  updateVoteId,
  addMenu,
  deleteMenu,
  updateMenu,
} from '../services/api';

const initialState = {
  roomList: [],
  voteList: [],
  menuList: [],
  voteId: '',
  userId: '',
  newMenu: '',
};
const reducers = {
  setRoomList(state, { payload: roomList }) {
    return {
      ...state,
      roomList,
    };
  },

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
  setRoomList,
  setVoteList,
  setMenuList,
  setCounts,
  setUserId,
  setVoteCount,
  resetVoteCount,
  setVoteId,
  setNewMenu,
} = actions;

export function loadRoomList(homeId) {
  return async (dispatch) => {
    const roomList = await fetchRoomList(homeId);

    dispatch(setRoomList(roomList));
  };
}

export function loadVoteList() {
  return async (dispatch) => {
    const voteList = await fetchVoteList();
    const users = await fetchUsers();

    dispatch(setVoteList(voteList));
    dispatch(setCounts(users));
  };
}

export function loadMenuList({ homeId, roomId }) {
  return async (dispatch) => {
    const menuList = await fetchMenuList({ homeId, roomId });
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

export function sendNewMenu(newMenu) {
  return async (dispatch) => {
    const id = `no${shortid.generate()}`;

    if (!newMenu) {
      return;
    }

    await addMenu({ id, name: newMenu });

    dispatch(setNewMenu(''));
  };
}

export function sendDeleteMenuId(deleteId) {
  return async () => {
    await deleteMenu(deleteId);
  };
}

export function sendUpdateMenu({ updateId, updateName }) {
  return async () => {
    await updateMenu({ id: updateId, name: updateName });
  };
}

export default reducer;
