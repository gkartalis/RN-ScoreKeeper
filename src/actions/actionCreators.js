import { APP_LAYOUT_CHANGED, P1_SCORE_CHANGED, P2_SCORE_CHANGED } from './';

const appLayout = layout => 
  dispatch => {
      console.log('layout ', layout)
      if (layout.height > layout.width) {
        dispatch({
          type: APP_LAYOUT_CHANGED,
          payload: true
        })
    } else {
        dispatch({
          type: APP_LAYOUT_CHANGED,
          payload: false
        })
      }
  }

const scoreChanged = (player, value) =>
  (dispatch, getState) => {
    if (player === 'p1') {
      dispatch({
        type: P1_SCORE_CHANGED,
        payload: getState().score.p1 + value
      })
    } else {
        dispatch({
          type: P2_SCORE_CHANGED,
          payload: getState().score.p2 + value
        })
    }
  }


export {
  appLayout,
  scoreChanged
}