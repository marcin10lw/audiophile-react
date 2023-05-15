export const getCartValueFromLocalStorage = <T>(
  key: string,
  initialValue: T
) => {
  const localStorageCartProducts = localStorage.getItem(key);

  if (!localStorageCartProducts) return initialValue;

  return JSON.parse(localStorageCartProducts);
};

export const saveCartValueToLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};
