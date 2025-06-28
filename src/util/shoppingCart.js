export function getSum(itemCount, itemPrice) {
  return itemCount * itemPrice;
}

export function getItemCount(items) {
  const count = items.reduce((acc, currentValue) => {
    return currentValue.count + acc;
  }, 0);
  return count;
}

export function getTotal(items) {
  const total = items.reduce((acc, currentValue) => {
    return getSum(currentValue.count, currentValue.price) + acc;
  }, 0);
  return total;
}

export function arrayFromNumber(number) {
  return Array.from({ length: number }, (v, index) => ({ id: index, value: index + 1, label: index + 1 }));
}
