import '@libs/dayjs';

import { Nunito_400Regular, Nunito_700Bold, Nunito_800ExtraBold, useFonts } from '@expo-google-fonts/nunito';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { CityProvider } from '@contexts/CityContext';
import { Routes } from '@routes/index';
import { StatusBar } from 'react-native';
import { Loading } from './src/components/Loading';
 
export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold, Nunito_800ExtraBold });

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />

      <CityProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CityProvider>
    </SafeAreaProvider>
  );
}
