const INITIAL_STATE = {
  p1name: 'Player 1',
  p2name: 'Player 2',
  leftestBtn: -5,
  leftBtn: -15,
  rightBtn: 15,
  rightestBtn: 5
};

export const settingsReducer = (
    state = INITIAL_STATE, action
) => {
    switch (action.type) {
      default:
        return state
    }
};