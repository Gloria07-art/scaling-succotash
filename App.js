import { Text, SafeAreaView, StyleSheet,View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import Button from './components/Button';
import ImageOffice from './components/ImageOffice';

export default function App() {
  return (
    <SafeAreaView >
      <View>
        <ImageOffice />
      </View>
      <View>
        <Button />
      </View>
    </SafeAreaView>
  );
}


