// Set an item in local storage
export const setLocalStorageItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  // Get an item from local storage
  export const getLocalStorageItem = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };
  
  // Remove an item from local storage
  export const removeLocalStorageItem = (key) => {
    localStorage.removeItem(key);
  };
  