import {
  fetchRestaurants,
} from './api';

import RESTAURANTS from '../../fixtures/restaurants';

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
});
