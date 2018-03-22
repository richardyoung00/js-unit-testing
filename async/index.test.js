export const successfulPromise = () => {
  return Promise.resolve('success');
};

test('promise resolves', () => {
  return expect(successfulPromise()).resolves.toBe('success')
});










export const unsuccessfulPromise = () => {
  return Promise.reject('fail');
};

test('promise rejects', () => {
  return expect(unsuccessfulPromise()).rejects.toBe('fail')
});











export const runCallback = (callback) => {
  callback('success')
};

test('callback returns success', (done) => {
  const callback = (result) => {
    expect(result).toBe('success');
    done();
  };
  runCallback(callback)
});