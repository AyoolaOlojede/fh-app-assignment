import { StyleProp, ViewStyle } from 'react-native';

export interface FHButtonProps {
  accessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
  title: string;
  backgroundColorDisabled?: string;
  color?: string;
  disabled?: boolean;
  leftIcon?: any;
  rightIcon?: any;
  testID?: string;
  onPress?: () => void;
}
