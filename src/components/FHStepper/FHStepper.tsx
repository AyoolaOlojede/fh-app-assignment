import React, { FC } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { MinusIcon, PlusIcon } from 'src/themes/icons';


import { FHStepperProps } from './FHStepper.interface';
import styles from './FHStepper.styles';

const FHStepper: FC<FHStepperProps> = ({
  onValueIncrease,
  onValueDecrease,
  counter
}) => {

  return (
    <View style={styles.adultContainer}>
        <TouchableOpacity style={styles.stepper} onPress={onValueDecrease}>
          <MinusIcon width={40} height={40}/>
        </TouchableOpacity>
        <Text style={styles.numericText}>{counter}</Text>
        <TouchableOpacity style={styles.stepper} onPress={onValueIncrease}>
          <PlusIcon width={40} height={40}/>
        </TouchableOpacity>
      </View>
  );
};

export default FHStepper;
