import { StyleProp, ViewStyle } from 'react-native';

export interface FHRoomTitleProps {
  roomNumber: number;
  onDelete?: (roomId: number) => void;
}
