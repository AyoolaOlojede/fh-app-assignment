import React, { FC } from 'react';
import { Text, View, TouchableNativeFeedback, Pressable } from 'react-native';


import { FHRoomTitleProps } from './FHRoomTitle.interface';
import styles from './FHRoomTitle.styles';
import { COLORS } from 'src/themes/colors';
import { PlusIcon } from 'src/themes/icons';

const FHRoomTitle: FC<FHRoomTitleProps> = ({
  roomNumber,
  onDelete,
}) => {
  
  const removeRoom = () =>{
    onDelete;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.roomTitle}>Room {roomNumber}</Text>
      <Pressable onPress={removeRoom}>
      <Text style={styles.removeText}>Remove room</Text>
      </Pressable>
    </View>
  );
};

export default FHRoomTitle;
