import { StyleProp, ViewStyle } from 'react-native';

export interface FHButtonProps {
  style?: StyleProp<ViewStyle>;
  title: string;
  backgroundColor?: string;
  borderColor?: string;
  backgroundColorDisabled?: string;
  color?: string;
  disabled?: boolean;
  onPress?: () => void;
}
