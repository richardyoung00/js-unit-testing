import { addTotal } from './index';

test('adds total of all items in pricelist', () => {
  const priceList = {
    eggs: 50,
    milk: 20,
    bread: 10,
  };

  addTotal(priceList);

  const expectedResult = {
    eggs: 50,
    milk: 20,
    bread: 10,
    total: 80,
  };

  expect(priceList).toEqual(expectedResult);
});











test('check equality of arrays', () => {
  expect(['a','b','c']).toEqual(['a','b','c']);
});











test('check array contains items', () => {
  expect(['b','a','c']).toEqual(
    expect.arrayContaining(['a','b','c'])
  );
});












test('check array contains subset', () => {
  expect(['b','a','c']).toEqual(
    expect.arrayContaining(['a'])
  );
});












test('check object contains items', () => {
  expect({a: 1, b: 2, c: 3}).toEqual(
    expect.objectContaining({a: 1, b: 2})
  );
});













test('array contains object that has name wally', () => {
  const input = [
    {name: 'bruce lee'},
    {name: 'chuck norris'},
    {name: 'wally'},
  ];

  expect(input).toContainEqual(
    expect.objectContaining({name: 'wally'})
  );
});















test('array contains object that contains string with wally', () => {
  const input = [
    {name: 'bruce lee'},
    {name: 'chuck norris'},
    {name: 'wally/waldo'},
  ];

  expect(input).toContainEqual(
    expect.objectContaining(
      {name: expect.stringContaining('wally')}
    )
  );
});
