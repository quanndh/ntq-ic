import React, { useEffect } from 'react';
import { client } from './src/apollo/client';
import { ApolloProvider } from '@apollo/client';
import { useColorScheme, LogBox } from 'react-native';
import { RootNavigator } from './src/navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import type { NavigationContainerRef } from '@react-navigation/native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';

LogBox.ignoreAllLogs();

const App = () => {
  const colorScheme = useColorScheme();
  const ref = React.useRef<NavigationContainerRef>(null);

  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <NavigationContainer ref={ref} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ApolloProvider>
  );
};
export default App;
