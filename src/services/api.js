export async function fetchRestaurants() {
  const url = 'http://localhost:3000/restaurants';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchUser(userId) {
  const url = `http://localhost:3000/users/${userId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function updateCount({ voteId, count }) {
  const url = `http://localhost:3000/restaurants/${voteId}`;
  await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ count }),
  });
}

export async function updateVoteId({ userId, voteId }) {
  const url = `http://localhost:3000/users/${userId}`;
  await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ voteId }),
  });
}
