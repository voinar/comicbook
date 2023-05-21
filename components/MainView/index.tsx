import { View } from 'react-native';
import ImagesBrowser from '../ImagesBrowser';
import styles from './styles';

const MainView = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImagesBrowser navigation={navigation} />
    </View>
  );
};

export default MainView;
