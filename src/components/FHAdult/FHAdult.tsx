import React, { FC, useState } from 'react';
import { Text, View } from 'react-native';



import { FHAdultProps } from './FHAdult.interface';
import styles from './FHAdult.styles';
import FHStepper from '../FHStepper/FHStepper';
import { useDispatch, useSelector } from 'react-redux';
import { updateGuestsCount } from 'src/data/slices/fhSlice';
import { MinusIcon, PlusIcon } from 'src/themes/icons';
import roomService from 'src/data/services/roomService';
import { RootState } from 'src/data/store/store';


const FHAdult: FC<FHAdultProps> = ({
  title ,roomId ,initialValue ,testID ,index
}) => {
 
  const ICON_SIZE = 30;
  const dispatch= useDispatch();
  const rooms= useSelector((state:RootState) => state.rooms);
  const adults = roomService.getAdultsCount(rooms,index);
  const [count, setCount] = useState<number>(initialValue);
  let stepValue = 1;
  const increment = () => { 
      setCount(count + stepValue);
        dispatch(updateGuestsCount({
          id: roomId,
          adultsCount:count + stepValue,
        }));
  }

  const decrement = () =>
  {
      setCount(count - stepValue)
      dispatch(updateGuestsCount({
        id: roomId,
        adultsCount:count - stepValue,
      }));
  }
  const minusIcon=<MinusIcon width={ICON_SIZE} height={ICON_SIZE}/>;
  const plusIcon=<PlusIcon width={ICON_SIZE} height={ICON_SIZE}/>;
  return (
    <>
      <View style={styles.stepperContainer} testID={testID}>
      <Text style={styles.otherTitle}>{title}</Text>
      <FHStepper onValueDecrease={decrement} onValueIncrease={increment}
      incrementIcon={plusIcon} decrementIcon={minusIcon}
      minValue={1} maxValue={5} counter={count}/>
      </View>
    </>
  );
};

export default FHAdult;
