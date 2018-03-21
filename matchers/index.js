export const addTotal = (priceList) => {
  let total = 0;
  Object.values(priceList).map(value => {
    total += value;
  });
  priceList.total = total;
  return priceList;
};
