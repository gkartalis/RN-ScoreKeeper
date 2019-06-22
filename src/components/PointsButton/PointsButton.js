import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';

export const PointsButton = ({
    value,
    onChangeScore
}) => {
    return (
        <TouchableOpacity onPress={onChangeScore}>
            <LinearGradient colors={[ '#505050', '#252525', '#202020', '#252525', '#505050']} style={styles.btn}>
                <Text style={styles.btnText}>
                    {value < 0 ? value : `+${value}`}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
  )
}
