import React, { FC, useState } from 'react';
import { Text, View, TouchableNativeFeedback, Pressable} from 'react-native';


import { FHChildAgeProps } from './FHChildAge.interface';
import styles from './FHChildAge.styles';
import CancelIcon from 'assets/icons/cancel.svg';
import DropDownPicker from 'react-native-dropdown-picker';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { updateChild } from 'src/data/slices/fhSlice';
import { useDispatch, useSelector } from 'react-redux';

const FHChildAge: FC<FHChildAgeProps> = ({
  roomIndex,
  childIndex,
  onRemove,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {id:1, label: '1', value: '1'},
    {id:2, label: '2', value: '2'},
    {id:3, label: '3', value: '3'},
    {id:4, label: '4', value: '4'},
    {id:5, label: '5', value: '5'},
    {id:6, label: '6', value: '6'},
    {id:7, label: '7', value: '7'},
    {id:8, label: '8', value: '8'},
  ]);
  const dispatch= useDispatch();
  const handleChange=(age: string|null) => {
    dispatch(updateChild({index: roomIndex,childIndex: childIndex,age: Number(age)}))
  };
  return (
    <View style={styles.childContainer} key={uuidv4()}>
      <Text style={styles.roomTitle}>Child {roomIndex + 1} age</Text>
      <View style={styles.container}>
      <DropDownPicker
      itemKey={'value'}
      key={uuidv4()}
      placeholder="Age"
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={{borderColor: '#BED2E9'}}
      containerStyle={{width: 100}}
      dropDownDirection="TOP"
      closeAfterSelecting={true}
      zIndex={2000}
      onChangeValue={handleChange}
      dropDownContainerStyle={{height: 300}}

    />
      <Pressable onPress={onRemove}>
      <CancelIcon width={40} height={40}/>
      </Pressable>
      </View>
    </View>
  );
};

export default FHChildAge;
