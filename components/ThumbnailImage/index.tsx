import { Text, View, Image, ActivityIndicator } from 'react-native';
import { useQuery } from 'react-query';
import styles from './styles';

interface ErrorWithMessage {
  message: string;
}

const ThumbnailImage = ({ imageId }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['imageThumbnails', imageId],
    queryFn: () =>
      fetch(`https://xkcd.com/${imageId}/info.0.json`).then((res) =>
        res.json()
      ),
  });
  if (isLoading) return <ActivityIndicator size="large" color="#00ff00" />;
  if (error)
    return (
      <Text>
        An error has occurred: + {(error as ErrorWithMessage).message}
      </Text>
    );

  return (
    <View>
      <Text style={styles.thumbnailText}>{data.alt}</Text>
      <Image style={styles.thumbnailImage} source={{ uri: data.img }} />
    </View>
  );
};

export default ThumbnailImage;
