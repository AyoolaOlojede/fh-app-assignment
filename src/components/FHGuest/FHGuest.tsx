import React, { FC } from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from 'src/themes/colors';



import { FHGuestProps } from './FHGuestinterface';
import styles from './FHGuest.styles';
import FHStepper from '../FHStepper/FHStepper';


const FHGuest: FC<FHGuestProps> = ({
  title
}) => {

  return (
      <View style={styles.stepperContainer}>
      <Text style={styles.otherTitle}>{title}</Text>
      <FHStepper/>
      </View>
  );
};

export default FHGuest;
