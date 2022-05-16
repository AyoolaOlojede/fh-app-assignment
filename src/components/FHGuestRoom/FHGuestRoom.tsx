import React, { FC } from 'react';
import { Text, View } from 'react-native';



import { FHGuestRoomProps } from './FHGuestRoom.interface';
import styles from './FHGuestRoom.styles';
import FHRoomTitle from '../FHRoomTitle/FHRoomTitle';
import { FHAdult } from '../FHAdult';
import FHChild from '../FHChild/FHChild';



const FHGuestRoom: FC<FHGuestRoomProps> = ({ index =1,roomId,
}) => {
  return (
    <View style={styles.container}>
      <View>
      <FHRoomTitle roomNumber={index} id={roomId}/>
     <FHAdult title='Adults'  roomId={roomId} initialValue={2}/>
     <FHChild title='Children' index={index} roomId={roomId} initialValue={0}/>
      </View>
    </View>
  );
};

export default FHGuestRoom;
