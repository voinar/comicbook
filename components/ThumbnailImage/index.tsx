import { Text, View, Image, Button } from 'react-native';
import useThumbnailImage from '../../hooks/useThumbnailImage';
import { useContext } from 'react';
import { ImagePreviewContext } from '../../context/Contexts';
import styles from './styles';

interface ThumbnailData {
  alt: string;
  img: string;
  transcript: string;
}

// renders a particular image from the list.
const ThumbnailImage = ({ imageId, navigation }) => {
  const { data } = useThumbnailImage(imageId);

  return (
    <View>
      <Text style={styles.thumbnailText}>[{imageId}] {(data as ThumbnailData)?.alt}</Text>

      <Image
        style={styles.thumbnailImage}
        source={{ uri: (data as ThumbnailData)?.img }}
        alt={(data as ThumbnailData)?.transcript}
      />

      <Button
        onPress={() =>
          navigation.navigate('ComicDetails', { imageId: imageId })
        }
        title="Details"
        color="#77C5E7"
        accessibilityLabel="View fullscreen"
      />
    </View>
  );
};

export default ThumbnailImage;
