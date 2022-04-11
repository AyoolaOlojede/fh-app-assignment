import React, { FC } from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native';


import { FHAddButtonProps } from './FHAddButton.interface';
import styles from './FHAddButton.styles';
import { COLORS } from 'src/themes/colors';
import { PlusIcon } from 'src/themes/icons';

const FHAddButton: FC<FHAddButtonProps> = ({
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
          <PlusIcon width={40} height={40}/>
          <Text style={[styles.text, { color }]}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default FHAddButton;
