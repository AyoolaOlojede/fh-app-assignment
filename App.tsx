import { NavigationContainer ,  DefaultTheme,
  DarkTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, useColorScheme} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from 'src/hooks/useCachedResources';
import { AppNavigator } from './src/navigation/App.navigator';
import {Provider} from 'react-redux';
import { store } from 'src/data/store/store';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';
  const currentNavigationTheme = isDarkMode ? DarkTheme : DefaultTheme;
  if (!isLoadingComplete) {
    return null;
  } else {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
    <NavigationContainer theme={currentNavigationTheme}>
      <AppNavigator/>
      <StatusBar/>
    </NavigationContainer>
    </Provider>
    </SafeAreaProvider>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
