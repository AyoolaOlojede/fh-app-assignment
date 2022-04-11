import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ROUTES } from './routes';
import { RootStackParamList } from '../domain/models/navigation';
import { Button } from 'react-native';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { GuestPickerScreen } from '../screens/GuestPicker/GuestPickerScreen';
import CancelIcon from 'assets/icons/cancel.svg';
import { useNavigation } from '@react-navigation/native';
import { FONT_FAMILIES, FONT_SIZES } from 'src/themes/fonts';

const Stack = createStackNavigator<RootStackParamList>();


export const AppNavigator = () => {
   const navigation = useNavigation();
   return  (
   <Stack.Navigator>
       <Stack.Screen
        name={ROUTES.Home}
     component={HomeScreen}
     options={{ headerShown: false }}
     />
     <Stack.Screen
        name={ROUTES.GuestPicker}
     component={GuestPickerScreen}
     options={{presentation: 'modal', headerShown: true , 
     title: 'Who is staying?', headerTitleStyle: {color: '#2A333D',
     fontSize: FONT_SIZES.large,fontFamily: FONT_FAMILIES.interSemiBold},
     headerTitleAlign: 'center',
     headerLeft: () => (
      <CancelIcon
      onPress={() => navigation.goBack()}
        width={30}
        height={30}
        style={{marginLeft: 20}}
      />
    ),}}
     />
 </Stack.Navigator>);
};
