import { P1_SCORE_CHANGED, P2_SCORE_CHANGED } from '../actions';

export const scoreReducer = (
    state = { p1: 0, p2: 0 }, action
) => {
    switch (action.type) {
      case P1_SCORE_CHANGED:
        return {
            ...state,
            p1: action.payload
        }
      case P2_SCORE_CHANGED:
        return {
            ...state,
            p2: action.payload
        }
      default:
        return state
    }
};