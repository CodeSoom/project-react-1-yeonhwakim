import APIVOTELIST from '../../../fixtures/apiVoteList';
import USERS from '../../../fixtures/users';
import USER from '../../../fixtures/user';

export async function fetchVoteList() {
  return APIVOTELIST;
}

export function fetchUsers() {
  return USERS;
}

export function fetchUser(userId) {
  return { id: userId, voteId: USER.voteId };
}

export function updateVoteId() {
  return null;
}
