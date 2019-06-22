import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const PlayerScoreHeader = props => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={props.isRed ? styles.playerColorRed : styles.playerColorBlue}/>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            {props.playerName}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default PlayerScoreHeader;
