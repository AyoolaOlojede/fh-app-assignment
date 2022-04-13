import React, { FC } from 'react';
import { Text, View } from 'react-native';



import { FHGuestRoomProps } from './FHGuestRoom.interface';
import styles from './FHGuestRoom.styles';
import FHGuest from '../FHGuest/FHGuest';
import FHRoomTitle from '../FHRoomTitle/FHRoomTitle';
import { FHChild } from '../FHChild';


const FHGuestRoom: FC<FHGuestRoomProps> = ({ roomNumber =1,id,
}) => {
  return (
    <View style={styles.container}>
      <View>
      <FHRoomTitle roomNumber={roomNumber} id={id}/>
     <FHGuest title='Adults' isChild={false}/>
     <FHGuest title='Children' isChild={true}/>
      </View>
    </View>
  );
};

export default FHGuestRoom;
