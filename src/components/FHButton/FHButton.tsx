import React, { FC } from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native';


import { FHButtonProps } from './FHButton.interface';
import styles from './FHButton.styles';
import { COLORS } from 'src/themes/colors';

const FHButton: FC<FHButtonProps> = ({
  style,
  title,
  borderColor,
  backgroundColor,
  color,
  disabled = false,
  onPress,
}) => {

  return (
    <View style={[styles.container, style]}>
      <TouchableNativeFeedback onPress={onPress} disabled={disabled}>
        <View style={[styles.textContainer, {backgroundColor,borderColor}]}>
          <Text style={[styles.text, { color }]}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default FHButton;
