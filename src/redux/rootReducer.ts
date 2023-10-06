import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
// slices
import testReducer from './slices/test';
// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: []
};

const rootReducer = combineReducers({
  test: testReducer
});

export { rootPersistConfig, rootReducer };
