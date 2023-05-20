import { StyleSheet, Text, View, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import BurgerIcon from '../../img/icons/icon-burger.png';

const MainView = () => {
  const ThumbnailsBrowser = () => {
    const { isLoading, error, data } = useQuery('imageData', () =>
      fetch('https://xkcd.com/31/info.0.json').then(
        (res) => res.json()
      )
    );

    if (isLoading) return <Text>'Loading...'</Text>;

    if (error) return <Text>'An error has occurred: ' + error.message</Text>;

    return (
      <View>
      <Text>loaded</Text>
          <Text>{JSON.stringify(data)}</Text>
          {/* <Text>{data.description}</Text> */}
          {/* <Text>👀 {data.subscribers_count}</Text> */}
          {/* <Text>✨ {data.stargazers_count}</Text> */}
          {/* <Text>🍴 {data.forks_count}</Text> */}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image style={styles.navIcon} source={BurgerIcon} />
        <Text style={styles.title}>Browse comics</Text>
      </View>
      <Text>Search</Text>
      <ThumbnailsBrowser />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
    // justifyContent: 'center',
    // alignSelf: 'center',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    backgroundColor: '#EDEEEE',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  navIcon: {
    width: 50,
    height: 42,
  },
  title: {
    fontSize: 40,
  },
});

export default MainView;
