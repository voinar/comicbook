import { Text, View, Image, Button } from 'react-native';
import styles from './styles';
import useThumbnailImage from '../../hooks/useThumbnailImage';
import { useContext, useState } from 'react';
import { ImagePreviewContext } from '../../context/Contexts';

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
      {/* <Text style={styles.thumbnailText}>{imageId}</Text> */}
      <Text>{useContext(ImagePreviewContext)}</Text>
      <Text style={styles.thumbnailText}>{(data as ThumbnailData)?.alt}</Text>

      <Image
        style={styles.thumbnailImage}
        source={{ uri: (data as ThumbnailData)?.img }}
        alt={(data as ThumbnailData)?.transcript}
      />

      <Button
        onPress={() =>
          navigation.navigate('SelectedImageContainer', { imageId: imageId })
        }
        title="View fullscreen"
        color="#3E1B16"
        accessibilityLabel="View fullscreen"
      />
    </View>
  );
};

export default ThumbnailImage;
