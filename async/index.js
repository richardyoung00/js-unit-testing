export const successfulPromise = () => {
  return Promise.resolve('success');
};

export const unsuccessfulPromise = () => {
  return Promise.reject('fail');
};

export const runCallback = (callback) => {
  callback('success')
};