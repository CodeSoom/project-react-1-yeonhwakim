import {
  fetchRestaurants,
  fetchUser,
  updateCount,
} from './api';

import RESTAURANTS from '../../fixtures/restaurants';
import USER from '../../fixtures/user';

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() { return data; },
    });
  };

  describe('fetchRestaurants', () => {
    beforeEach(() => {
      mockFetch(RESTAURANTS);
    });

    it('returns restaurants', async () => {
      const restaurants = await fetchRestaurants();

      expect(restaurants).toEqual(RESTAURANTS);
    });
  });

  describe('fetchUser', () => {
    beforeEach(() => {
      mockFetch(USER);
    });

    it('returns restaurants', async () => {
      const userId = 'no1';
      const user = await fetchUser(userId);

      expect(user).toEqual(USER);
    });
  });

  describe('updateCount', () => {
    it('updates count', async () => {
      const voteId = 'no1';
      const count = '1';
      const result = await updateCount({ voteId, count });

      expect(result).toBeUndefined();
    });
  });
});
