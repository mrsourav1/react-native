// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import FlatList from './FlatList';
import Header from './Header';
import Login from './Login';
import MenuItem from './MenuItem';
import Sample from './Sample';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './SignUp';
import EditProfile from './EditProfile';
// import { AuthContext } from './Context/AuthContext';
// import AuthProvider  from './Context/AuthContext'
// import AuthProvider,{AuthContext} from './Context/AuthContext'
import SplashScreen from './SplashScreen';
import { AuthContext } from '../Context/AuthContext';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {splashLoading, userInfo} = useContext(AuthContext)
  return (
      <NavigationContainer>
        <Stack.Navigator>
          {splashLoading ?(
            <Stack.Screen
            name="Splash Screen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          ):userInfo.token ? (
            <Stack.Screen name="SignUP" component={SignUp} options={{headerShown:false}} />
          ):(
            <><Stack.Screen name="Login" component={Sample} options={{title:"Login",headerStyle:{backgroundColor:"#F5F3F3"},headerTintColor:"black",headerTitleAlign:'center',headerTintStyle:{fontWeight:"bold"}}}/>
            </>
          )
        }
          {/* <Sample />  */}
          {/* <Stack.Screen name="Login" component={Sample} options={{title:"Login",headerStyle:{backgroundColor:"#F5F3F3"},headerTintColor:"black",headerTitleAlign:'center',headerTintStyle:{fontWeight:"bold"}}}/> */}
          {/* <Stack.Screen name="SignUP" component={SignUp} options={{headerShown:false}} /> */}
          {/* <Stack.Screen name="editProfile" component={EditProfile} options={{title:"Edit Profile",headerStyle:{backgroundColor:"#F5F3F3"},headerTintColor:"black",headerTitleAlign:'center',headerTintStyle:{fontWeight:"bold"}}} /> */}
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Navigation

