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
