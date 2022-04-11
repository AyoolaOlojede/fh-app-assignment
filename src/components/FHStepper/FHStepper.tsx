import React, { FC } from 'react';
import { Text, View, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import { COLORS } from 'src/themes/colors';
import { MinusIcon, PlusIcon } from 'src/themes/icons';


import { FHStepperProps } from './FHStepper.interface';
import styles from './FHStepper.styles';

const FHStepper: FC<FHStepperProps> = ({
}) => {

  return (
    <View style={styles.adultContainer}>
        <TouchableOpacity style={styles.stepper}>
          <MinusIcon width={40} height={40}/>
        </TouchableOpacity>
        <Text style={styles.numericText}>2</Text>
        <TouchableOpacity style={styles.stepper}>
          <PlusIcon width={40} height={40}/>
        </TouchableOpacity>
      </View>
  );
};

export default FHStepper;
