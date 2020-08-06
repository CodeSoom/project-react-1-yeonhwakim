import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  loadRestaurants,
  setRestaurants,
  setSingleVote,
  setVoteCount,
  resetVoteCount,
} from './slice';

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

      expect(actions[0]).toEqual(setRestaurants([]));
    });
  });

  describe('setSingleVote', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    context('with voteId', () => {
      it('runs setSingleVote', async () => {
        const id = 'no1';
        const voteId = '';

        await store.dispatch(setSingleVote(id, voteId));

        const actions = store.getActions();

        expect(actions[0]).toEqual(setVoteCount(id));
      });
    });

    context('without voteId', () => {
      it('runs setSingleVote', async () => {
        const id = 'no1';
        const voteId = 'no1';

        await store.dispatch(setSingleVote(id, voteId));

        const actions = store.getActions();

        expect(actions[0]).toEqual(resetVoteCount(voteId));
        expect(actions[1]).toEqual(setVoteCount(id));
      });
    });
  });
});
