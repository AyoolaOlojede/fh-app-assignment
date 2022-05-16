import { StyleProp, ViewStyle } from 'react-native';

export interface FHStepperProps {
    onValueIncrease?: () => void;
    onValueDecrease?: () => void;
    counter:number;
    minValue:number;
    maxValue:number;
    accessibilityLabel?: string;
    testID?: string;
    incrementIcon: any;
    decrementIcon: any;
}
