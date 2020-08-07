import USER from '../../../fixtures/user';

export async function fetchRestaurants() {
  return [];
}

export function fetchUser(userId) {
  return { id: userId, voteId: USER.voteId };
}
