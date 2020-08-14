import reducer, {
  setVoteList,
  setMenuList,
  setCounts,
  setUserId,
  setVoteId,
  setNewMenu,
} from './slice';

import VOTELIST from '../../fixtures/voteList';
import MENULIST from '../../fixtures/menuList';
import USERS from '../../fixtures/users';
import USER from '../../fixtures/user';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      voteList: [],
      menuList: [],
      voteId: '',
      userId: '',
      newMenu: '',
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setVoteList', () => {
    it('changes voteList', () => {
      const initialState = {
        voteList: [],
      };

      const state = reducer(initialState, setVoteList(VOTELIST));

      expect(state.voteList).toHaveLength(5);
    });
  });

  describe('setMenuList', () => {
    it('changes menuList', () => {
      const initialState = {
        menuList: [],
      };

      const state = reducer(initialState, setMenuList(MENULIST));

      expect(state.menuList).toHaveLength(5);
    });
  });

  describe('setCounts', () => {
    it('set vote count', () => {
      const initialState = {
        voteList: VOTELIST,
      };

      const state = reducer(initialState, setCounts(USERS));
      expect(state.voteList[0].count).toBe(2);
    });
  });

  describe('setUserId', () => {
    it('set user id', () => {
      const initialState = {
        voteList: VOTELIST,
        userId: USER.id,
      };

      const state = reducer(initialState, setUserId(USERS.id));
      expect(state.userId).toBe(USERS.id);
    });
  });

  describe('setVoteId', () => {
    it('changes vote id', () => {
      const initialState = {
        voteList: VOTELIST,
      };

      const state = reducer(initialState, setVoteId('no1'));
      expect(state.voteId).toBe(USER.voteId);
    });
  });

  describe('setNewMenu', () => {
    it('set new menu', () => {
      const initialState = {
        newMenu: '',
      };

      const state = reducer(initialState, setNewMenu('김밥천국'));
      expect(state.newMenu).toBe('김밥천국');
    });
  });
});
