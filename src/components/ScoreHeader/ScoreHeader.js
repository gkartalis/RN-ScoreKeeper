import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const ScoreHeader = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        {`Round #${props.round}`}
      </Text>
    </View>
  );
}

export default ScoreHeader;
