import reducer, {
  setRestaurants,
} from './slice';

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

      const restaurants = [
        { id: 'no1', name: '국수나무', count: 0 },
        { id: 'no2', name: '요기맘', count: 0 },
        { id: 'no3', name: '구내식당', count: 0 },
        { id: 'no4', name: '돈푸대', count: 0 },
        { id: 'no5', name: '태양식당', count: 0 },
      ];

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(5);
    });
  });
});
