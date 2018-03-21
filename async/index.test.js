import {runCallback, successfulPromise, unsuccessfulPromise} from './index';

test('promise resolves', () => {
  return expect(successfulPromise()).resolves.toBe('success')
});

test('promise rejects', () => {
  return expect(unsuccessfulPromise()).rejects.toBe('fail')
});

test('callback returns success', (done) => {
  const callback = (result) => {
    expect(result).toBe('success');
    done();
  };
  runCallback(callback)
});