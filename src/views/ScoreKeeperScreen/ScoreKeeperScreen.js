import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import PlayerScore from '../../components/PlayerScore/';
import ScoreHeader from '../../components/ScoreHeader';
import { styles } from './styles';

const ScoreKeeperScreen = ({ score, settings, scoreChanged, isPortrait, appLayout }) => {
  
  const _onLayout = event => appLayout(event.nativeEvent.layout);
  return (
    <View onLayout={_onLayout} style={styles.container}>
      <ScoreHeader round={0}/>
      <View
        style={
          isPortrait ?
            styles.innerContainer
            : styles.rowContainer
        }
      >
        <PlayerScore
          isRed={true}
          score={score.p1}
          playerName={settings.p1name}
          scoreChanged={scoreChanged}
          playerKey={'p1'}
          settings={settings}
        />
        <PlayerScore
          isRed={false}
          score={score.p2}
          playerName={settings.p2name}
          scoreChanged={scoreChanged}
          playerKey={'p2'}
          settings={settings}
        />
      </View>
      {
        isPortrait &&
        <View style={styles.bottomSpace}/>
      }
    </View>
  );
};

ScoreKeeperScreen.propTypes = {
  score: PropTypes.object,
  settings: PropTypes.object,
  scoreChanged: PropTypes.func,
  appLayout: PropTypes.func,
  isPortrait: PropTypes.bool
};

export default ScoreKeeperScreen;
