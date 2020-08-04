export async function fetchRestaurants() {
  const url = 'http://localhost:3000/restaurants';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export function sample() {

}
