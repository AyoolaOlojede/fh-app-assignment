import React, { FC } from 'react';
import { Text, View } from 'react-native';



import { FHGuestRoomProps } from './FHGuestRoom.interface';
import styles from './FHGuestRoom.styles';
import FHGuest from '../FHGuest/FHGuest';
import FHRoomTitle from '../FHRoomTitle/FHRoomTitle';


const FHGuestRoom: FC<FHGuestRoomProps> = ({ roomNumber =1
}) => {
  return (
    <View style={styles.container}>
      <View>
      <FHRoomTitle roomNumber={roomNumber}/>
     <FHGuest title='Adults'/>
     <FHGuest title='Children'/>
      </View>
    </View>
  );
};

export default FHGuestRoom;
