import React from 'react';
import store from './src/store';
import { Provider } from 'react-redux';
import ScoreKeeperScreen from './src/views/ScoreKeeperScreen/';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <ScoreKeeperScreen />
      </Provider>
    );
  }
}
