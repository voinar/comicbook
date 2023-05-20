import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useQuery } from 'react-query';

export default ThumbnailImage = ({ imageId }) => {
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

const styles = StyleSheet.create({
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
});
