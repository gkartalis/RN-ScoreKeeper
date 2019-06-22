import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Score = ({
   score
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>
        {score}
      </Text>
    </View>
  )
}

export default Score;
