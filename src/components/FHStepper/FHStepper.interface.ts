import { StyleProp, ViewStyle } from 'react-native';

export interface FHStepperProps {
    onValueIncrease?: () => void;
    onValueDecrease?: () => void;
    counter:number;
}
