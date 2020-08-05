import reducer, {
  setRestaurants,
  setVoteCount,
} from './slice';

import RESTAURANTS from '../../fixtures/restaurants';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      restaurants: [],
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const initialState = {
        restaurants: [],
      };

      const state = reducer(initialState, setRestaurants(RESTAURANTS));

      expect(state.restaurants).toHaveLength(5);
    });
  });

  describe('setVoteCount', () => {
    it('changes vote count', () => {
      const initialState = {
        restaurants: RESTAURANTS,
      };

      const state = reducer(initialState, setVoteCount('no1'));
      expect(state.restaurants[0].count).toBe(1);
    });
  });
});
