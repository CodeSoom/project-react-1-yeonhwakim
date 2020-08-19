import {
  fetchRoomList,
  fetchVoteList,
  fetchMenuList,
  fetchUsers,
  fetchUser,
  updateVoteId,
  addMenu,
  deleteMenu,
  updateMenu,
} from './api';

import HOME from '../../fixtures/home';
import VOTELIST from '../../fixtures/voteList';
import MENULIST from '../../fixtures/menuList';
import USERS from '../../fixtures/users';
import USER from '../../fixtures/user';

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() { return data; },
    });
  };

  describe('fetchRoomList', () => {
    beforeEach(() => {
      mockFetch(HOME[0]);
    });

    it('returns roomList', async () => {
      const homeId = 1;
      const roomList = await fetchRoomList(homeId);

      expect(roomList).toEqual(HOME[0].room);
    });
  });

  describe('fetchVoteList', () => {
    beforeEach(() => {
      mockFetch(VOTELIST);
    });

    it('returns voteList', async () => {
      const voteList = await fetchVoteList();

      expect(voteList).toEqual(VOTELIST);
    });
  });

  describe('fetchMenuList', () => {
    beforeEach(() => {
      mockFetch(MENULIST);
    });

    it('returns menuList', async () => {
      const menuList = await fetchMenuList();

      expect(menuList).toEqual(MENULIST);
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

  describe('updateVoteId', () => {
    it('updates vote id', async () => {
      const userId = 'user1';
      const voteId = 'no1';
      const result = await updateVoteId({ userId, voteId });

      expect(result).toBeUndefined();
    });
  });

  describe('addMenu', () => {
    it('add menu', async () => {
      const id = 'no6';
      const name = '김밥천국';
      const result = await addMenu({ id, name });

      expect(result).toBeUndefined();
    });
  });

  describe('deleteMenu', () => {
    it('delete menu', async () => {
      const id = 'no5';
      const result = await deleteMenu(id);

      expect(result).toBeUndefined();
    });
  });

  describe('updateMenu', () => {
    it('update menu', async () => {
      const id = 'no1';
      const name = '국시나무';
      const result = await updateMenu({ id, name });

      expect(result).toBeUndefined();
    });
  });
});
