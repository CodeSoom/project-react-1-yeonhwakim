import APIVOTELIST from '../../../fixtures/apiVoteList';
import MENULIST from '../../../fixtures/menuList';
import USERS from '../../../fixtures/users';
import USER from '../../../fixtures/user';

export async function fetchVoteList() {
  return APIVOTELIST;
}

export async function fetchMenuList() {
  return MENULIST;
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

export function addMenu() {
  return null;
}
