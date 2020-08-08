import reducer, {
  setVoteList,
  setCounts,
  setUserId,
  setVoteId,
} from './slice';

import VOTELIST from '../../fixtures/voteLsit';
import USERS from '../../fixtures/users';
import USER from '../../fixtures/user';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      voteList: [],
      voteId: '',
      userId: '',
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
});
