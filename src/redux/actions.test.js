import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  loadRestaurants,
  loadUsers,
  loadUser,
  sendVoteId,
  setRestaurants,
  setCounts,
  setUserId,
  setVoteId,
} from './slice';

import APIRESTAURANTS from '../../fixtures/apiRestaurants';
import USERS from '../../fixtures/users';
import USER from '../../fixtures/user';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../services/api');

describe('actions', () => {
  let store;

  describe('loadRestaurants', () => {
    beforeEach(() => {
      store = mockStore([]);
    });

    it('runs setRestaurants', async () => {
      await store.dispatch(loadRestaurants());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRestaurants(APIRESTAURANTS));
      expect(actions[1]).toEqual(setCounts(USERS));
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
});
