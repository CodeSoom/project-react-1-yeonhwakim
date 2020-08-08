import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  loadRestaurants,
  loadUsers,
  loadUser,
  setRestaurants,
  setCounts,
  setSingleVote,
  setVoteCount,
  setVoteId,
  resetVoteCount,
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

      expect(actions[0]).toEqual(setVoteId(USER.voteId));
    });
  });

  describe('setSingleVote', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    context('without voteId', () => {
      it('runs setSingleVote', async () => {
        const voteId = '';
        const id = 'no1';

        await store.dispatch(setSingleVote(id, voteId));

        const actions = store.getActions();

        expect(actions[0]).toEqual(setVoteCount(id));
      });
    });

    context('with voteId', () => {
      it('runs setSingleVote', async () => {
        const voteId = 'no1';
        const id = 'no2';

        await store.dispatch(setSingleVote(id, voteId));

        const actions = store.getActions();

        expect(actions[0]).toEqual(resetVoteCount(voteId));
        expect(actions[1]).toEqual(setVoteCount(id));
      });
    });

    context('same id and voteId', () => {
      it('runs setSingleVote', async () => {
        const id = 'no1';
        const voteId = 'no1';

        await store.dispatch(setSingleVote(id, voteId));

        const actions = store.getActions();

        expect(actions[0]).toEqual(resetVoteCount(voteId));
      });
    });
  });
});
