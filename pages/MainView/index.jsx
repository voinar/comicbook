import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  Button,
  ActivityIndicator,
} from 'react-native';
import { useState } from 'react';
import { useQuery } from 'react-query';
import 'react-native-get-random-values';

import BurgerIcon from '../../img/icons/icon-burger.png';

// renders a list of images. list is seeded from an array of numbers. this array is then mapped by indexes and images are downloaded and displayed. eg.: index 3 maps to image number 3 in json endpoint.
const ImagesBrowser = () => {
  const defaultIncrement = 32; //used to increment the number of indexes when extending the seed array.
  const defaultRange = Array.from(Array(defaultIncrement).keys()).slice(1);
  const [imageIds, setImageIds] = useState(defaultRange);

  // loads more images on button press. extends the existing image array by 50 items.
  const loadMore = () => {
    const extendIndexRangeBy = imageIds.length + defaultIncrement;
    const newRange = Array.from(Array(extendIndexRangeBy).keys()).slice(1);
    setImageIds(newRange);
    // console.log('ids', [imageIds]);
  };

  return (
    <View style={styles.imagesBrowser}>
      {/* <Text>{imageIds}</Text> */}
      {imageIds.map((imageId) => (
        <View key={imageId}>
          {/* <Text>current img: {imageId}</Text> */}
          <ThumbnailImage imageId={imageId} key={imageId} />
        </View>
      ))}

      <Button
        onPress={loadMore}
        style={styles.button}
        title="Load More 👀"
        color="#3E1B16"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

const ThumbnailImage = ({ imageId }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['imageThumbnails', imageId],
    queryFn: () =>
      fetch(`https://xkcd.com/${imageId}/info.0.json`).then((res) =>
        res.json()
      ),
  });
  if (isLoading) return <ActivityIndicator size="large" color="#00ff00" />;
  if (error) return <Text>An error has occurred: + {error.message}</Text>;

  return (
    <View>
      <Text style={styles.thumbnailText}>{data.alt}</Text>
      <Image style={styles.thumbnailImage} source={{ uri: data.img }} />
    </View>
  );
};

const MainView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        {/* <Image style={styles.navIcon} source={BurgerIcon} /> */}
        <Text style={styles.title}>Browse comics</Text>
      </View>
      <Text style={styles.search}>Search</Text>
      <ImagesBrowser style={styles.imagesBrowser} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    fontColor: '#3E1B16',

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
    fontWeight: 100,
  },
  search: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    height: 40,
    backgroundColor: '#3E1B16',
  },
  imagesBrowser: {
    flex: 1,
    gap: 24,
    // flexDirection: 'column',
    // flexWrap: 'wrap',
    // width: '100%'
  },
  thumbnailText: {
    fontSize: 18,
    marginBottom: 6,
  },
  thumbnailImage: {
    borderWidth: 2,
    borderColor: '#3E1B16',
    borderRadius: 10,
    width: '100%',
    height: 300,
  },
  button: {},
});

export default MainView;
