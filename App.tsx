import { View } from 'react-native';
import { Home } from './src/screens/Home';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={{flex: 1}}>
        <Home/>
      </View>
    </NativeBaseProvider>
  
  );
}
