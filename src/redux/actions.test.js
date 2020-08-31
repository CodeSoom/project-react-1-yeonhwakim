import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  loadRoomList,
  loadVoteList,
  loadMenuList,
  loadUsers,
  loadUser,
  setRoomList,
  sendVoteId,
  setVoteList,
  setMenuList,
  setCounts,
  setUserId,
  setVoteId,
  sendNewMenu,
  setNewMenu,
  sendDeleteMenuId,
  sendUpdateMenu,
} from './slice';

import HOME from '../../fixtures/home';
import ROOM from '../../fixtures/room';
import APIVOTELIST from '../../fixtures/apiVoteList';
import MENULIST from '../../fixtures/menuList';
import USERS from '../../fixtures/users';
import USER from '../../fixtures/user';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../services/api');

describe('actions', () => {
  let store;

  describe('loadRoomList', () => {
    beforeEach(() => {
      store = mockStore([]);
    });

    it('runs setRoomList', async () => {
      await store.dispatch(loadRoomList());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRoomList(HOME[0].room));
    });
  });

  describe('loadVoteList', () => {
    beforeEach(() => {
      store = mockStore([]);
    });

    it('runs setVoteList', async () => {
      await store.dispatch(loadVoteList());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setVoteList(APIVOTELIST));
      expect(actions[1]).toEqual(setCounts(USERS));
    });
  });

  describe('loadMenuList', () => {
    beforeEach(() => {
      store = mockStore([]);
    });

    it('runs setMenuList', async () => {
      const roomId = ROOM[0].id;
      await store.dispatch(loadMenuList({ roomId }));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setMenuList(ROOM[0].menu));
    });
  });

  describe('loadUsers', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('runs loadUsers', async () => {
      await store.dispatch(loadUsers());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setCounts(USERS));
    });
  });

  describe('loadUser', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('runs loadUser', async () => {
      const userId = 'user1';
      await store.dispatch(loadUser(userId));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setUserId(USER.id));
      expect(actions[1]).toEqual(setVoteId(USER.voteId));
    });
  });

  describe('sendVoteId', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('runs setVoteId', async () => {
      const voteId = 'no1';
      await store.dispatch(sendVoteId(voteId));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setVoteId(voteId));
    });
  });

  describe('sendNewMenu', () => {
    beforeEach(() => {
      store = mockStore({
        menuList: MENULIST,
        newMenu: '김밥천국',
      });
    });

    it('runs setNewMenu', async () => {
      await store.dispatch(sendNewMenu('김밥천국'));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setNewMenu(''));
    });
  });

  describe('sendDeleteMenuId', () => {
    beforeEach(() => {
      store = mockStore({
      });
    });

    it('runs nothing', async () => {
      await store.dispatch(sendDeleteMenuId('no1'));

      const actions = store.getActions();

      expect(actions[0]).toBeUndefined();
    });
  });

  describe('sendUpdateMenu', () => {
    beforeEach(() => {
      store = mockStore({
      });
    });

    it('runs nothing', async () => {
      const updateId = 'no1';
      const updateName = '국시나무';
      await store.dispatch(sendUpdateMenu({ updateId, updateName }));

      const actions = store.getActions();

      expect(actions[0]).toBeUndefined();
    });
  });
});
