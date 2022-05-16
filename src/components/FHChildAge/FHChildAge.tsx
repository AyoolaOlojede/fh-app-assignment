import React, { FC, useState } from 'react';
import { Text, View, TouchableNativeFeedback, Pressable} from 'react-native';


import { FHChildAgeProps } from './FHChildAge.interface';
import styles from './FHChildAge.styles';
import DropDownPicker from 'react-native-dropdown-picker';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { updateChild } from 'src/data/slices/fhSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveIcon } from 'src/themes/icons';

const FHChildAge: FC<FHChildAgeProps> = ({
  roomIndex,
  childIndex,
  onRemove,
}) => {
  const getData =() =>{
   return  Array.from({length: 10}).map((item, i) => {
      let result= i+1;
      return  {id:result, label: result.toString(), value: result.toString()};
    });
  }
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(getData);

  const dispatch= useDispatch();
  const handleChange=(age: string|null) => {
    dispatch(updateChild({index: roomIndex,childIndex: childIndex,age: Number(age)}))
  };
  return (
    <View style={styles.childContainer} key={uuidv4()}>
      <View
        style={styles.seperator}
      />
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
      style={styles.dropDown}
      containerStyle={{width: 120}}
      dropDownDirection="TOP"
      closeAfterSelecting={true}
      zIndex={2000}
      onChangeValue={handleChange}
      labelStyle={styles.placeHolder}
      placeholderStyle= {styles.placeHolder}
      dropDownContainerStyle={styles.dropDownContent}

    />
      <Pressable onPress={onRemove} style={{alignItems: 'center', justifyContent: 'center'}}>
      <RemoveIcon width={30} height={30}/>
      </Pressable>
      </View>
    </View>
  );
};

export default FHChildAge;
