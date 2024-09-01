import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PublicNavigator } from '../PublicNavigator';

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <PublicNavigator />
    </NavigationContainer>
  );
};
