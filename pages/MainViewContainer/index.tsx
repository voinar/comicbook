import { ScrollView } from 'react-native';
import MainView from '../../components/MainView';
import styles from './styles';

// Wraps the Main View inside ScrollView component.
const MainViewContainer = ({ navigation }) => {
  return (
    <ScrollView style={styles.scrollView}>
      <MainView navigation={navigation} />
    </ScrollView>
  );
};

export default MainViewContainer;
