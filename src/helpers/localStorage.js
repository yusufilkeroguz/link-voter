const STORAGE_NAME = 'links'

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(STORAGE_NAME);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_NAME, serializedState);
  } catch {
    // ignore write errors
  }
};
