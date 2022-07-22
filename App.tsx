import { NativeBaseProvider, StatusBar } from 'native-base'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto' 

import { THEME } from './src/styles/theme';

import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';

export default function App() {
  //carregamento de fontes do projeto
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      {/* barra de status */}
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      /> 
      {/* IF ternário para verificar se a fonte foi carregada antes da aplicação */}
      {fontsLoaded ? <Routes /> : <Loading/> }
    </NativeBaseProvider>
    
  );
}
