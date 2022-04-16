import React, { FC } from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native';


import { FHSearchButtonProps } from './FHSearchButton.interface';
import styles from './FHSearchButton.styles';
import { COLORS } from 'src/themes/colors';

const FHSearchButton: FC<FHSearchButtonProps> = ({
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

export default FHSearchButton;
