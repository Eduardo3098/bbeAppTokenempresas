import 'react-native-gesture-handler';
import * as React from 'react';
import { Image, StyleSheet, View } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Screens from './screens';
import Splash from '../containers/splash';
import Logo from '../res/images/logoBPHeader.svg';
import AddBusiness from '../containers/addBusiness';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  logo: {
    height: hp(3),
    width: wp(60),
    alignSelf: 'center',
  },
});

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.SplashScreen} options="screen">
        <Stack.Screen
          name={Screens.SplashScreen}
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={Screens.AddBusinessScreen}
          component={AddBusiness}
          options={{
            headerTitle: () => (
              <View
                style={{
                  width: wp(100),
                  alignSelf: 'center',
                }}>
                <Logo style={styles.logo} />
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
