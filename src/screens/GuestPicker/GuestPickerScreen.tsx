import React, { FC, ReactElement, useEffect } from 'react';
import { FlatList, ScrollView, StatusBar } from 'react-native';
import { View } from 'react-native';
import { FHAddButton } from 'src/components/FHAddButton';
import { FHGuestRoom } from '../../components/FHGuestRoom';
import styles from './GuestPickerScreen.styles';
import { useDispatch, useSelector } from 'react-redux';
import { addRoom } from 'src/data/slices/fhSlice';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from 'src/data/store/store';
import { FHSearchButton } from 'src/components/FHSearchButton';
import { COLORS } from 'src/themes/colors';
import roomService from 'src/data/services/roomService';



export const GuestPickerScreen: FC<any> = () => {
  const dispatch= useDispatch();
  const rooms= useSelector((state:RootState) => state.rooms);
  
  useEffect(() => {
    dispatch(addRoom( {
      id:uuidv4(),
      adultsCount:2,
      children:[],
     }))
  }, [])

  const handleAddRoom =() => {
    dispatch(addRoom( {
      id:uuidv4(),
      adultsCount:2,
      children:[],
     }))
  };
  const result='Search '+ roomService.getTotalRooms(rooms) + '.' + roomService.getTotalGuests(rooms);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
        <View>
        <FlatList
        data={rooms.rooms}
        renderItem={({ item, index }) => <FHGuestRoom index={index}  roomId={item.id} key={item.id}/>}
        keyExtractor={(item, index) => index.toString()}
        />
         <FHAddButton title='Add Room' backgroundColor='#DAE9FA'
      borderColor='#DAE9FA' color='#0071F3'
      onPress={handleAddRoom}/>
        </View>
        <View>
          <FHSearchButton title={result} color={COLORS.white} backgroundColor={COLORS.primary}/>
        </View>
    </View>
  );
};
