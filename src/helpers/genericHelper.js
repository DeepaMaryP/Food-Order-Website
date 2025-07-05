export function storeToLocal(key, items) {
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(items));
}

