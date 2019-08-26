import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import { loadState, saveState } from './helpers/localStorage'

const persistedState = loadState();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
    persistedState
  )

  store.subscribe(() => {
    saveState({
      links: store.getState()
    });
  });

  return store;
}
