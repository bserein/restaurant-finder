import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RestaurantList from './src/components/RestaurantList';

export default function App() {
  return (
    <View style={styles.container}>
      <RestaurantList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
