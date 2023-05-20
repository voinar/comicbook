import { Text, View, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './pages/SplashScreen';
import MainView from './pages/MainView';
import styles from './styles';

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

export default function App() {
  const [splashVisibility, setSplashVisibility] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisibility(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const MainViewContainer = () => {
    return (
      <ScrollView style={styles.scrollView}>
        <MainView />
      </ScrollView>
    );
  };

  const SelectedImageContainer = () => {
    return (
      <View>
        <Text>selected image container</Text>
      </View>
    );
  };

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
                name="SelectedImageContainer"
                component={SelectedImageContainer}
                options={{ title: 'View details' }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </View>
    </QueryClientProvider>
  );
}
