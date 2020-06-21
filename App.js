import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PhoneVerificationPage from './src/pages/PhoneVerificationPage'
import PhoneCodePage from './src/pages/PhoneCodePage'
import WelcomePage from './src/pages/WelcomePage'
import RecoveryPassword from './src/pages/RecoveryPassword'
import logo from './src/components/logo.png'

const Stack = createStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PhoneVerificationPage"
          component={PhoneVerificationPage}
          options={{
          headerShown: false
          }}
          />
        <Stack.Screen
          name="PhoneCodePage"
          component={PhoneCodePage}
          options={{
          headerShown: false
          }}
          />
        <Stack.Screen
          name="WelcomePage"
          component={WelcomePage}
          options={{
          headerShown: false
          }}
          />
        <Stack.Screen
          name="RecoveryPassword"
          component={RecoveryPassword}
          options={{
           title: '',
          headerStyle: {
            backgroundColor: '#000000',
            shadowColor: 'transparent'
          },
          headerTintColor: '#FDE93A',
          headerBackTitle: null,
          headerTruncatedBackTitle: '',
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>

    );
}

export default App;