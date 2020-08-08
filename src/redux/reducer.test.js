import reducer, {
  setRestaurants,
  setCounts,
  setVoteCount,
  resetVoteCount,
  setVoteId,
} from './slice';

import RESTAURANTS from '../../fixtures/restaurants';
import USERS from '../../fixtures/users';
import USER from '../../fixtures/user';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      restaurants: [],
      voteId: '',
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

  describe('setCounts', () => {
    it('set vote count', () => {
      const initialState = {
        restaurants: RESTAURANTS,
      };

      const state = reducer(initialState, setCounts(USERS));
      expect(state.restaurants[0].count).toBe(2);
    });
  });

  describe('setVoteCount', () => {
    it('changes vote count', () => {
      const initialState = {
        restaurants: RESTAURANTS,
      };

      const state = reducer(initialState, setVoteCount('no1'));
      expect(state.restaurants[0].count).toBe(RESTAURANTS[0].count + 1);
    });
  });

  describe('resetVoteCount', () => {
    it('changes vote count', () => {
      const initialState = {
        restaurants: RESTAURANTS,
      };

      const state = reducer(initialState, resetVoteCount('no1'));
      expect(state.restaurants[0].count).toBe(RESTAURANTS[0].count - 1);
    });
  });

  describe('setVoteId', () => {
    it('changes vote id', () => {
      const initialState = {
        restaurants: RESTAURANTS,
      };

      const state = reducer(initialState, setVoteId('no1'));
      expect(state.voteId).toBe(USER.voteId);
    });
  });
});
