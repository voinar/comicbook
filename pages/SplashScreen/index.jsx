import React from 'react';
import { View, Image } from 'react-native';
import LogoSplash from '../../img/logo_splash.png';
import styles from './styles';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={LogoSplash} />
    </View>
  );
};

export default SplashScreen;
