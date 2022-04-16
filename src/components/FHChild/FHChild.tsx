import React, { FC, useState } from 'react';
import { Text, View } from 'react-native';



import { FHChildProps } from './FHChild.interface';
import styles from './FHChild.styles';
import FHStepper from '../FHStepper/FHStepper';
import { FHChildAge } from '../FHChildAge';
import { useDispatch, useSelector } from 'react-redux';
import { addChild, removeChild, updateGuestsCount } from 'src/data/slices/fhSlice';
import { RootState } from 'src/data/store/store';
import roomService from 'src/data/services/roomService';



const FHChild: FC<FHChildProps> = ({
  title ,index ,initialValue ,roomId
}) => {
  const dispatch= useDispatch();
  const [count, setCount] = useState<number>(initialValue);
  const rooms= useSelector((state:RootState) => state.rooms);
  const chidren = roomService.getChildren(rooms, index);

  let minValue = 0;
  let maxValue = 8;
  let stepValue = 1;
  const increment = () => {
    if(count>=8)
    {
    setCount(maxValue)
    dispatch(addChild(index))
    }
    else{
      setCount(count + stepValue);
        dispatch(addChild(index))
    }
  }

  const decrement = () =>
  {
    if(count<=minValue)
    {
    setCount(minValue)
    dispatch(removeChild(index))
    }
    else{
      setCount(count - stepValue)
      dispatch(removeChild(index))
    }
  }
  return (
    <View>
      <View style={styles.stepperContainer}>
      <Text style={styles.otherTitle}>{title}</Text>
      <FHStepper onValueDecrease={decrement} onValueIncrease={increment} counter={count}/>
      </View>
        <View style={{paddingLeft: 30}}>
          {chidren?.map((item, i) => {
        return <React.Fragment key={i}>
        <FHChildAge key={i.toString()} roomIndex={i} childIndex={i} onRemove={decrement} /> 
        </React.Fragment>
           })
          }
        </View>
      
    </View>
  );
};

export default FHChild;
