import { View, Text,TextInput } from 'react-native'
import React, { useState } from 'react';
// import { UserOutlined  } from '@ant-design/icons';
// import { TextInput } from 'react-native-web'
import { MessageOutlined } from '@ant-design/icons';


const Login = () => {
    const[username,setUsername] = useState("")
  return (
    <View style={{display:"flex",alignItems:'center',justifyContent:"center"}}>
      <TextInput  style={{marginTop:200,padding:10,backgroundColor:"blue",width:"80%"}}
      value = {username}
      placeholder="Username"
    //   onChange = {(e)=>setUsername(e)}
    onChangeText={setUsername}
      />
      <View>
        <MessageOutlined style={{ fontSize: '16px', color: '#08c' }} />;
      </View>
      <TextInput  style={{marginTop:20, padding:10,backgroundColor:"blue",width:"80%"}}
      value = {username}
      placeholder="Username"
    //   onChange = {(e)=>setUsername(e)}
    onChangeText={setUsername}
      />
    </View>
  )
}

export default Login