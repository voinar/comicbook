import { Text, View } from 'react-native';
import ImagesBrowser from '../../components/ImagesBrowser';
import styles from './styles';
import { useContext } from 'react';
import { ImagePreviewContext } from '../../context/Contexts';

const MainView = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Text>{useContext(ImagePreviewContext)}</Text> */}
      <ImagesBrowser navigation={navigation} />
    </View>
  );
};

export default MainView;
