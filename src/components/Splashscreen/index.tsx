import React, { useEffect } from 'react';
import { View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

/**
 * An empty component used to manage SplashScreen from Suspense fallback
 */
const Splashscreen = () => {
  useEffect(() => {
    return () => {
      // Hide Splashscreen when Fallback get willUnmount
      SplashScreen.hide();
    };
  });

  // To avoid strange crash if i18next load takes too much! 🙀🙀🙀
  return <View />;
};

export default React.memo(Splashscreen);
