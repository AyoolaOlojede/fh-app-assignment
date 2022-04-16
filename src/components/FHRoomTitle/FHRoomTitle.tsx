import React, { FC } from 'react';
import { Text, View, TouchableNativeFeedback, Pressable } from 'react-native';


import { FHRoomTitleProps } from './FHRoomTitle.interface';
import styles from './FHRoomTitle.styles';
import { useDispatch, useSelector } from 'react-redux';
import { removeRoom } from 'src/data/slices/fhSlice';
import { RootState } from 'src/data/store/store';

const FHRoomTitle: FC<FHRoomTitleProps> = ({
  roomNumber,
  id,
}) => {
  const rooms= useSelector((state:RootState) => state.rooms);
  const dispatch= useDispatch();
  const deleteRoom = () =>{
    dispatch(removeRoom(id));
  }
  return (
    <View style={styles.container}>
      <Text style={styles.roomTitle}>Room {roomNumber + 1}</Text>
      {rooms.rooms.length > 1 &&
      <Pressable onPress={deleteRoom}>
      <Text style={styles.removeText}>Remove room</Text>
      </Pressable>
     }
    </View>
  );
};

export default FHRoomTitle;
