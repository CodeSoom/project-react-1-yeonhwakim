import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  loadRestaurants,
  setRestaurants,
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
});
