import React, { FC } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { MinusIcon, PlusIcon } from 'src/themes/icons';


import { FHStepperProps } from './FHStepper.interface';
import styles from './FHStepper.styles';

const FHStepper: FC<FHStepperProps> = ({
  onValueIncrease,
  onValueDecrease,
  counter,
  minValue,
  maxValue,
  testID,
  accessibilityLabel,
  incrementIcon,
  decrementIcon
}) => {
  const isDecreaseDisabled = counter === minValue;
  const isIncreaseDisabled = counter === maxValue;

  //const maxGuest=6;
  //const isUpperBound = counter < maxGuest;
  return (
    <View style={styles.adultContainer} accessibilityLabel='Step Counter'>
        <TouchableOpacity disabled={isDecreaseDisabled} style={styles.stepper} onPress={onValueDecrease} testID={testID}>
          {decrementIcon}
        </TouchableOpacity>
        <Text style={styles.numericText}>{counter}</Text>
        <TouchableOpacity disabled={isIncreaseDisabled} style={styles.stepper} onPress={onValueIncrease} testID={testID}>
          {incrementIcon}
        </TouchableOpacity>
      </View>
  );
};

export default FHStepper;
