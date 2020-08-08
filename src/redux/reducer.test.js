import reducer, {
  setRestaurants,
  setCounts,
  setUserId,
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
      userId: '',
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

  describe('setUserId', () => {
    it('set user id', () => {
      const initialState = {
        restaurants: RESTAURANTS,
        userId: USER.id,
      };

      const state = reducer(initialState, setUserId(USERS.id));
      expect(state.userId).toBe(USERS.id);
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
