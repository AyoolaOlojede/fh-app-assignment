import { PixelRatio } from 'react-native';

export const normalizeFontSize = (size: number) => {
  return Math.round(PixelRatio.roundToNearestPixel(size));
};
