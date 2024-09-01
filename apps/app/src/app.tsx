import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import React from 'react';
import { MainNavigator } from './navigation/MainNavigator';

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <MainNavigator />
    </SafeAreaProvider>
  );
};
export default App;
