import { View, Button } from 'react-native';
import ThumbnailImage from '../ThumbnailImage';
import useImagesBrowser from '../../hooks/useImagesBrowser';
import styles from './styles';

// renders a list of images. list is seeded from an array of numbers. this array is then mapped by indexes and images are downloaded and displayed. eg.: index 3 maps to image number 3 in json endpoint.
const ImagesBrowser = () => {
  const { defaultIncrement, defaultRange, imageIds, setImageIds, loadMore } =
    useImagesBrowser();

  return (
    <View style={styles.imagesBrowser}>
      {imageIds.map((imageId) => (
        <View key={imageId}>
          <ThumbnailImage imageId={imageId} key={imageId} />
        </View>
      ))}

      <Button
        onPress={loadMore}
        title="Load More 👀"
        color="#3E1B16"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default ImagesBrowser;
