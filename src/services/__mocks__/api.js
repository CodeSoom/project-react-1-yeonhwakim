import APIRESTAURANTS from '../../../fixtures/apiRestaurants';
import USERS from '../../../fixtures/users';
import USER from '../../../fixtures/user';

export async function fetchRestaurants() {
  return APIRESTAURANTS;
}

export function fetchUsers() {
  return USERS;
}

export function fetchUser(userId) {
  return { id: userId, voteId: USER.voteId };
}
