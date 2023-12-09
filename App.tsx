import { useState, useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';

SplashScreen.preventAutoHideAsync();

import { Routes } from './src/routes';

export default function App() {
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Inter_400Regular,
          Inter_600SemiBold,
          Inter_700Bold,
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" translucent={false} />
      <Routes />
    </View>
  );
}

