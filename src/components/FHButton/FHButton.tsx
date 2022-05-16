import React, { FC } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';


import { FHButtonProps } from './FHButton.interface';
import styles from './FHButton.styles';

const FHButton: FC<FHButtonProps> = ({
  accessibilityLabel,
  testID,
  style,
  title,
  color,
  disabled = false,
  leftIcon,
  rightIcon,
  onPress,
}) => {

  const buttonStyles = [
    styles.container,
    style,
  ];
  return (
      <TouchableOpacity onPress={onPress} disabled={disabled}
      accessibilityLabel={accessibilityLabel}
      style={buttonStyles}
      activeOpacity={1}
      testID={testID}
      >
        <View style={styles.textContainer}>
          {leftIcon}
          <Text style={[styles.text, { color }]}>{title}</Text>
          {rightIcon}
        </View>
      </TouchableOpacity>
  );
};

export default FHButton;
