import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';

const SignButton = ({
  sign,
  onPressHandler
}) => {
  return (
    <TouchableOpacity onPress={onPressHandler}>
      <LinearGradient colors={[ '#505050', '#252525', '#202020', '#252525', '#505050']} style={styles.signBtn}>
        <Text style={styles.signLabel}>
          {sign}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default SignButton;
