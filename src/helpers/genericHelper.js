export function storeToLocal(key, items) {
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(items));
}

export function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
