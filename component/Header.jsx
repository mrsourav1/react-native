import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={{ flex: 0.2, backgroundColor: '#F4CE14' }}>
         <Text style={{ padding: 40, fontSize: 30, color: 'black',textAlign: 'center' }}>
            Welcome to <Text>color</Text> Little Lemon
         </Text>
    </View>
  )
}

export default Header