import {
  fetchRestaurants,
  fetchUsers,
  fetchUser,
  updateCount,
  updateVoteId,
} from './api';

import RESTAURANTS from '../../fixtures/restaurants';
import USERS from '../../fixtures/users';
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

  describe('fetchUsers', () => {
    beforeEach(() => {
      mockFetch(USERS);
    });

    it('returns users', async () => {
      const users = await fetchUsers();

      expect(users).toEqual(USERS);
    });
  });

  describe('fetchUser', () => {
    beforeEach(() => {
      mockFetch(USER);
    });

    it('returns user', async () => {
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

  describe('updateVoteId', () => {
    it('updates vote id', async () => {
      const userId = 'user1';
      const voteId = 'no1';
      const result = await updateVoteId({ userId, voteId });

      expect(result).toBeUndefined();
    });
  });
});
