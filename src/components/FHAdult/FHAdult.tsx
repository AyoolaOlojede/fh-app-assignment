import React, { FC, useState } from 'react';
import { Text, View } from 'react-native';



import { FHAdultProps } from './FHAdult.interface';
import styles from './FHAdult.styles';
import FHStepper from '../FHStepper/FHStepper';
import { useDispatch } from 'react-redux';
import { updateGuestsCount } from 'src/data/slices/fhSlice';



const FHAdult: FC<FHAdultProps> = ({
  title ,roomId, index ,initialValue
}) => {
  const dispatch= useDispatch();
  const [count, setCount] = useState<number>(initialValue);
  let minValue = 1;
  let maxValue = 8;
  let stepValue = 1;
  const increment = () => {
    if(count>=8)
    {
    setCount(maxValue)
    dispatch(updateGuestsCount({
      id: roomId,
      adultsCount:maxValue,
    }))
    }
    else{
      setCount(count + stepValue);
        dispatch(updateGuestsCount({
          id: roomId,
          adultsCount:count + stepValue,
        }));
    }
  }

  const decrement = () =>
  {
    if(count<=minValue)
    {
    setCount(minValue)
    dispatch(updateGuestsCount({
      id: roomId,
      adultsCount:minValue,
    }));
    }
    else{
      setCount(count - stepValue)
      dispatch(updateGuestsCount({
        id: roomId,
        adultsCount:count - stepValue,
      }));
    }
  }
  return (
    <View>
      <View style={styles.stepperContainer}>
      <Text style={styles.otherTitle}>{title}</Text>
      <FHStepper onValueDecrease={decrement} onValueIncrease={increment} counter={count}/>
      </View>
    </View>
  );
};

export default FHAdult;
