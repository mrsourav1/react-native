// import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import FlatList from './component/FlatList';
import Header from './component/Header';
import Login from './component/Login';
import MenuItem from './component/MenuItem';
import Sample from './component/Sample';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './component/SignUp';
import EditProfile from './component/EditProfile';
// import { AuthContext } from './Context/AuthContext';
// import AuthProvider  from './Context/AuthContext'
import AuthProvider,{AuthContext} from './Context/AuthContext'
import SplashScreen from './component/SplashScreen';
import Navigation from './component/Navigation';
import RegistrationScreen from "./component/hanui/Signup"


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
const Stack = createNativeStackNavigator();
export default function app(){
  // const {splashLoading} = useContext(AuthContext);
  // const {splashLoading,userInfo} = useContext(AuthContext)
  // const {splashLoading, userInfo} = useContext(AuthContext)
  // const [splashLoading,setSplashLoading] = useState(false)
  // const [userInfo,setUserInfo] = useState(false)
  return(
    <>
      {/* <Header />
      <MenuItem/> */}
      {/* <FlatList /> */}  
      <AuthProvider>
        <Navigation />
        {/* <RegistrationScreen /> */}
      </AuthProvider>

    </>
  );
};


// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/native-stack
// npm install react-native-loading-spinner-overlay
// async storage
// axios
