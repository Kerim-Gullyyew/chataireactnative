import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAppSelector} from '../store/hook';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import {Colors} from '../constants/Colors';

const Stack = createStackNavigator();

const Navigation = () => {
  const isLoggedIn = true;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: Colors.background},
        }}>
        {!isLoggedIn ? (
          <Stack.Screen name="Login" component={Login} />
        ) : (
          <>{/* <Stack.Screen name="HomeTab" component={HomeTab} /> */}</>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
