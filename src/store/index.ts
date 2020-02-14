import { createStore, combineReducers } from 'redux';

import loadingReducer from './ducks/loading';

const rootReducer = combineReducers({
  loading: loadingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
