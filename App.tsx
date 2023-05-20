import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './pages/SplashScreen';
import { useEffect, useState } from 'react';
// import SplashScreen from 'react-native-splash-screen'

export default function App() {
  const [splashVisibility, setSplashVisibility] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisibility(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <SplashScreen splashVisibility={splashVisibility} />
      <Text>comic book ok</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#77C5E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
