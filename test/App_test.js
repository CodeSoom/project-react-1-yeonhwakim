Feature('App');

Scenario('Hello world 가 보인다', (I) => {
  I.amOnPage('/');
  I.see('Hello, world!');
});
