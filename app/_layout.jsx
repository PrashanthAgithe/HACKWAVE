import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { Slot, SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { UserProvider } from './store/UserContext'; 

SplashScreen.preventAutoHideAsync(); // Prevent auto-hide of splash screen until fonts are loaded

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) {
      console.error('Error loading fonts:', error); // Log any errors in loading fonts
      throw error; // Throw the error to stop rendering
    }
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null; // Return null to render nothing while fonts are loading
  }

  return (
    <UserProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false, headerTitleAlign: 'center' }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false, headerTitleAlign: 'center' }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false, headerTitleAlign: 'center' }} />
      </Stack>
    </UserProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
  },
});
