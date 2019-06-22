import { combineReducers } from 'redux';
import { settingsReducer } from './settingsReducer';
import { uiReducer } from './uiReducer';
import { scoreReducer } from './scoreReducer';

export default combineReducers({
  settings: settingsReducer,
  ui: uiReducer,
  score: scoreReducer
});
