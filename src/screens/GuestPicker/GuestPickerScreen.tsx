import React, { FC, ReactElement, useEffect } from 'react';
import { FlatList, ScrollView, StatusBar } from 'react-native';
import { View } from 'react-native';
import { FHButton } from 'src/components/FHButton';
import { FHGuestRoom } from '../../components/FHGuestRoom';
import styles from './GuestPickerScreen.styles';
import { useDispatch, useSelector } from 'react-redux';
import { addRoom, reset } from 'src/data/slices/fhSlice';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from 'src/data/store/store';
import { COLORS } from 'src/themes/colors';
import roomService from 'src/data/services/roomService';
import { GuestPickerScreenProps } from './GuestPickerScreen.interface';
import { GuestRoomsResult } from 'src/utils/guestRoomUtil';
import { PlusIcon , SearchIcon } from 'src/themes/icons';



export const GuestPickerScreen: FC<GuestPickerScreenProps> = (
  {
    onChange
  }
) => {
  const dispatch= useDispatch();
  const rooms= useSelector((state:RootState) => state.rooms);

  const handleAddRoom =() => {
    dispatch(addRoom( {
      id:uuidv4(),
      adultsCount:2,
      children:[],
     }))
  };
  useEffect(() => {
    dispatch(reset());
  }, [])
  

  const handleSearchRooms = () =>{
   return GuestRoomsResult(rooms);
  };
  const listItemSeparator = () => {
    return (
      <View
        style={styles.seperator}
      />
    );
  }

  const plusIcon = <PlusIcon width={30} height={30}  accessibilityLabel='AddButton'/>;
  const searchIcon = <SearchIcon width={30} height={30}  accessibilityLabel='SearchButton'/>;
  const result='Search '+ roomService.getTotalRooms(rooms) + '.' + roomService.getTotalGuests(rooms);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
        <View>
        <FlatList
        data={rooms}
        renderItem={({ item, index }) => <FHGuestRoom index={index}  roomId={item.id} key={item.id}/>}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={listItemSeparator}
        />
         <FHButton title='Add Room' testID='Add Button'
       color='#0071F3' leftIcon={plusIcon} style={styles.addButton}
      onPress={handleAddRoom}/>
        </View>
        <View>
          <FHButton leftIcon={searchIcon} title={result} style={styles.searchButton} color={COLORS.white}/>
        </View>
    </View>
  );
};
