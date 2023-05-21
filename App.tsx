import { View } from 'react-native';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './pages/SplashScreen';
import ComicDetails from './pages/ComicDetails';
import MainViewContainer from './pages/MainViewContainer';
import styles from './styles';

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

export default function App() {

  // Controls the conditional rendering of the splash screen.
  const [splashVisibility, setSplashVisibility] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisibility(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        {splashVisibility ? (
          <SplashScreen />
        ) : (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={MainViewContainer}
                options={{ title: 'Browse comics' }}
              />
              <Stack.Screen
                name="ComicDetails"
                component={ComicDetails}
                options={{ title: 'View details' }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </View>
    </QueryClientProvider>
  );
}
