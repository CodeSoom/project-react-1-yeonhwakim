Feature('Vote');

const restaurants = [
  { id: 'no1', name: '국수나무' },
  { id: 'no2', name: '요기맘' },
  { id: 'no3', name: '구내식당' },
  { id: 'no4', name: '돈푸대' },
  { id: 'no5', name: '태양식당' },
];

Scenario('투표리스트가 보인다.', (I) => {
  I.amOnPage('/');
  restaurants.forEach((restaurant) => I.see(restaurant.name));
});

Scenario('식당을 클리하면 투표수가 올라간다.', (I) => {
  I.amOnPage('/');
  restaurants.forEach((restaurant) => {
    I.click(`${restaurant.name}`);
    I.see('1', `.${restaurant.id}Count`);
  });
});

Scenario('클릭 한 것을 또 클릭하면 투표수가 줄어든다.(반복 투표 방지)', (I) => {
  I.amOnPage('/');
  restaurants.forEach((restaurant) => {
    I.click(`${restaurant.name}`);
    I.see('1', `.${restaurant.id}Count`);
  });
  restaurants.forEach((restaurant) => {
    I.click(`${restaurant.name}`);
    I.see('0', `.${restaurant.id}Count`);
  });
});

Scenario('중복투표 방지', (I) => {
  I.amOnPage('/');

  I.click('국수나무');
  I.see('1', 'no1Count');

  I.click('요기맘');
  I.see('0', 'no1Count');
  I.see('1', 'no2Count');
});
