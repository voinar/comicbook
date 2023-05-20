import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import SplashScreen from './pages/SplashScreen';
import MainView from './pages/MainView';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

export default function App() {
  const [splashVisibility, setSplashVisibility] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisibility(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        {splashVisibility ? (
          <SplashScreen />
        ) : (
          <>
            {/* main section */}
            <ScrollView style={styles.scrollView}>
              <MainView />
            </ScrollView>
          </>
        )}
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 40,
    backgroundColor: '#EDEEEE',
    fontColor: '#3E1B16',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  scrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 10,
  },
});
