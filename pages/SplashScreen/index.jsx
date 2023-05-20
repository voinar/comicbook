import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import LogoSplash from '../../img/logo_splash.png';

const SplashScreen = () => {
  return (

        <View style={styles.container}>
          <Image style={styles.logo} source={LogoSplash} />
        </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#77C5E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 142,
  },
});

export default SplashScreen;
