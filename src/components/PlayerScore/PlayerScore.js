import React from 'react';
import { View } from 'react-native';
import { PointsButton } from '../PointsButton/PointsButton';
import SignButton from '../SignButton';
import SideScore from '../SideScore';
import PlayerScoreHeader from '../PlayerScoreHeader/PlayerScoreHeader';
import Score from '../Score';
import styles from './styles';

const PlayerScore = ({
  isRed,
  playerName,
  score,
  scoreChanged,
  playerKey,
  settings
}) => {
    return (
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <View style={styles.headerScoreContainer}>
            <PlayerScoreHeader isRed={isRed} playerName={playerName}/>
            <View style={styles.scoreContainer}>
              <View style={styles.innerScoreContainer}>
                <SignButton sign={'-'} onPressHandler={() => scoreChanged(playerKey, -1)} />
                <Score score={score}/>
                <SignButton sign={'+'} onPressHandler={() => scoreChanged(playerKey, 1)} />
              </View>
            </View>
          </View>
         <SideScore />
        </View>
        <View style={styles.btnContainer}>
          <PointsButton value={settings.leftestBtn} onChangeScore={() => scoreChanged(playerKey, settings.leftestBtn)} />
          <PointsButton value={settings.leftBtn} onChangeScore={() => scoreChanged(playerKey, settings.leftBtn)} />
          <PointsButton value={settings.rightBtn} onChangeScore={() => scoreChanged(playerKey, settings.rightBtn)} />
          <PointsButton value={settings.rightestBtn} onChangeScore={() => scoreChanged(playerKey, settings.rightestBtn)} />
        </View>
    </View>
    );
}

export default PlayerScore;
