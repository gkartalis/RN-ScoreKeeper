import { APP_LAYOUT_CHANGED } from '../actions';

const INITIAL_STATE = {
  isPortrait: true
};

export const uiReducer = (
    state = INITIAL_STATE, action
) => {
    switch (action.type) {
      case APP_LAYOUT_CHANGED: 
        return {
          isPortrait: action.payload
        }
      default:
        return state
    }
};