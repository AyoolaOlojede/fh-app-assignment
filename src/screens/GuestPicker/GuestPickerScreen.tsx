import React, { FC, ReactElement, useEffect } from 'react';
import { FlatList, ScrollView, StatusBar } from 'react-native';
import { View } from 'react-native';
import { FHAddButton } from 'src/components/FHAddButton';
import { FHGuestRoom } from '../../components/FHGuestRoom';


import styles from './GuestPickerScreen.styles';
import { useState } from 'react';
import { Room } from '../../domain/models/Room';
export const GuestPickerScreen: FC<any> = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  
  useEffect(() => {
    setRooms((arr) => {
      return [
        ...arr,
        {
         adultsCount:1,
         children:[],
        },
      ];
    });
  }, [])

  const handleAddRoom =() => {
    setRooms((arr) => {
      return [
        ...arr,
        {
         adultsCount:1,
         children:[],
        },
      ];
    });
  };

  const handleRemoveRoom =(roomId: number) => {
    setRooms((prevState) => {
      const arr = [...prevState];
      return arr.splice(-1);
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
        <View>
        <FlatList
        data={rooms}
        renderItem={({ item, index }) => <FHGuestRoom roomNumber={index + 1} />}
        keyExtractor={(item, index) => index.toString()}
        />
         <FHAddButton title='Add Room' backgroundColor='#DAE9FA'
      borderColor='#DAE9FA' color='#0071F3'
      onPress={handleAddRoom}/>
        </View>
    </View>
  );
};
