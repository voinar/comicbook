import { Text, View, Image } from 'react-native';
import styles from './styles';
import useThumbnailImage from '../../hooks/useThumbnailImage';

interface ThumbnailData {
  alt: string;
  img: string;
  transcript: string;
}

const ThumbnailImage = ({ imageId }) => {
  const { data } = useThumbnailImage(imageId);

  return (
    <View>
      {/* <Text style={styles.thumbnailText}>{imageId}</Text> */}
      <Text style={styles.thumbnailText}>{(data as ThumbnailData)?.alt}</Text>
      <Image
        style={styles.thumbnailImage}
        source={{ uri: (data as ThumbnailData)?.img }}
        alt={(data as ThumbnailData)?.transcript}
      />
    </View>
  );
};

export default ThumbnailImage;
