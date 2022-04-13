import React, { FC, useState } from 'react';
import { Text, View } from 'react-native';



import { FHGuestProps } from './FHGuestinterface';
import styles from './FHGuest.styles';
import FHStepper from '../FHStepper/FHStepper';
import { FHChild } from '../FHChild';


const FHGuest: FC<FHGuestProps> = ({
  title, isChild
}) => {
  const [count, setCount] = useState<number>(0);
  const [total, setTotal] = useState<number[]>([]);
  let minValue = 0;
  let maxValue = 8;
  let stepValue = 1;
  const increment = () => {
    if(count>=8)
    {
    setCount(maxValue)
    setTotal(Array.from({length: maxValue}));
    }
    else{
      setCount(count + stepValue);
      setTotal((e) => {
        return [
          ...e,
          stepValue
        ]
      }); 
    }
  }

  const decrement = () =>
  {
    if(count<=minValue)
    {
    setCount(minValue)
    setTotal(Array.from({length: minValue}));
    }
    else{
      setCount(count - stepValue)
      setTotal((e) => {
        return e.slice(0,total.length -1);
      }); 
    }
  }
  return (
    <View>
      <View style={styles.stepperContainer}>
      <Text style={styles.otherTitle}>{title}</Text>
      <FHStepper onValueDecrease={decrement} onValueIncrease={increment} counter={count}/>
      </View>{isChild && (
        <View style={{paddingLeft: 30}}>
          { total.map((item, i) => {
        return <React.Fragment key={i + 1}>
        <FHChild key={i.toString()} roomNumber={i + 1} onRemove={decrement} /> 
        </React.Fragment>
          })
          }
       
        </View>
      )
      }
      
    </View>
  );
};

export default FHGuest;
