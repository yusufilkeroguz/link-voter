import { createStore } from 'redux'
import rootReducer from './reducer';
import { loadState, saveState } from './helpers/localStorage'

const persistedState = loadState();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )

  store.subscribe(() => {
    saveState(store.getState());
  });

  return store;
}
