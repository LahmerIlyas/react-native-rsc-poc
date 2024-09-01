import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MovieRoute } from '../../routes/MovieRoute';

const Stack = createStackNavigator();

export const PublicNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="MovieRoute">
      <Stack.Screen name="MovieRoute" component={MovieRoute} />
    </Stack.Navigator>
  );
};
