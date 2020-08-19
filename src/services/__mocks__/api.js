import HOME from '../../../fixtures/home';
import APIVOTELIST from '../../../fixtures/apiVoteList';
import MENULIST from '../../../fixtures/menuList';
import USERS from '../../../fixtures/users';
import USER from '../../../fixtures/user';

export async function fetchRoomList() {
  return HOME[0].room;
}

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

export function deleteMenu() {
  return null;
}

export function updateMenu() {
  return null;
}
