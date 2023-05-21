import { Text, View, ScrollView } from 'react-native';
import useThumbnailImage from '../../hooks/useThumbnailImage';
import AutoHeightImage from 'react-native-auto-height-image';
import styles from './styles';

interface ComicDetailsProps {
  navigation: any;
  route: {
    params: {
      imageId: number;
    };
  };
}

const ComicDetails = ({
  route,
}: ComicDetailsProps) => {
  const imageId = route.params.imageId;
  const { data } = useThumbnailImage(imageId);
  const unableToLoad = 'unable to load information';

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.titleText}>{data?.safe_title || unableToLoad}</Text>
        <Text style={styles.subtitleText}>
          Id: {route.params.imageId || unableToLoad} | Year:{' '}
          {data.year || unableToLoad}
        </Text>
        <AutoHeightImage
          width={360}
          style={styles.fullImage}
          source={{ uri: data?.img }}
          alt={data?.transcript}
        />
        <Text style={styles.subtitleText}>Description:</Text>
        <View>
          <Text style={styles.captionText}>{data.alt || unableToLoad}</Text>
        </View>
      </ScrollView>
    </View>
  );
};


export default ComicDetails;
