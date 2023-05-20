import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import LogoSplash from '../../img/logo_splash.png';

const styles = StyleSheet.create({
  container: {
    // paddingTop: 50,
  },
  logo: {
    width: 150,
    height: 142,
  },
});

const SplashScreen = ({ splashVisibility }) => {
  return (
    <>
      {splashVisibility && (
        <View style={styles.container}>
          <Image style={styles.logo} source={LogoSplash} />
        </View>
      )}
    </>
  );
};

export default SplashScreen;
