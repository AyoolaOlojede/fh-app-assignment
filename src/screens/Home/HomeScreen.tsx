import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { ImageBackground, View } from 'react-native';
import { HomeBackgroundImage } from '../../themes/images';


import styles from './HomeScreen.styles';
import { ROUTES } from '../../navigation/routes';
import FHButton from '../../components/FHButton/FHButton';
import { COLORS } from '../../themes/colors';

export const HomeScreen: FC<any> = () => {
  const navigation = useNavigation<any>();
  const handleShowModal =() => {
  navigation.navigate(ROUTES.GuestPicker);
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        style={styles.imageBackground}
        source={HomeBackgroundImage}
        resizeMode="contain"
      />
        <View style={styles.card}>
          <FHButton title='Search' style={styles.homeButton} color={COLORS.white} onPress={handleShowModal}/>
        </View>
    </View>
  );
};
