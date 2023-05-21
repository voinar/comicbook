import { ScrollView } from 'react-native';
import MainView from '../../components/MainView';
import styles from './styles';

const MainViewContainer = ({ navigation }) => {
  return (
    <ScrollView style={styles.scrollView}>
      <MainView navigation={navigation} />
    </ScrollView>
  );
};

export default MainViewContainer;
