test('tests some jquery', () => {
  document.body.innerHTML = require('./index.html');

  global.$ = require('jquery');

  require('./sayHello');

  $('#name').val('Richard');
  $('#button').click();
  const output = $('#output').text();
  expect(output).toBe('Hello Richard')
});