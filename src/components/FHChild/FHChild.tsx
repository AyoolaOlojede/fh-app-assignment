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
import { MinusIcon, PlusIcon } from 'src/themes/icons';



const FHChild: FC<FHChildProps> = ({
  title ,index ,initialValue ,roomId
}) => {
  const ICON_SIZE = 30;
  const dispatch= useDispatch();
  const [count, setCount] = useState<number>(initialValue);
  const rooms= useSelector((state:RootState) => state.rooms);
  const chidren = roomService.getChildren(rooms, index);
  let stepValue = 1;
  const increment = () => {
      setCount(count + stepValue);
      dispatch(addChild(index));
  }

  const decrement = () =>
  {
      setCount(count - stepValue)
      dispatch(removeChild(index))
  }
  const minusIcon=<MinusIcon width={ICON_SIZE} height={ICON_SIZE}/>;
  const plusIcon=<PlusIcon width={ICON_SIZE} height={ICON_SIZE}/>;
  return (
    <>
      <View style={styles.stepperContainer}>
      <Text style={styles.otherTitle}>{title}</Text>
      <FHStepper onValueDecrease={decrement} incrementIcon={plusIcon}
      decrementIcon={minusIcon}
       onValueIncrease={increment} minValue={0} maxValue={3} counter={count}/>
      </View>
        <View style={{paddingLeft: 10}}>
          {chidren?.map((item, i) => {
        return <React.Fragment key={i}>
        <FHChildAge key={i.toString()} roomIndex={i} childIndex={i} onRemove={decrement} /> 
        </React.Fragment>
           })
          }
        </View>
      
    </>
  );
};

export default FHChild;
