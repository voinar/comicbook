import { Text, View } from 'react-native';
import ImagesBrowser from '../../components/ImagesBrowser';
import styles from './styles';

const MainView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.search}>Search</Text>
      <ImagesBrowser />
    </View>
  );
};


export default MainView;
