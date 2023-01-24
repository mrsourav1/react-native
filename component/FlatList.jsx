// import { View, Text } from 'react-native'
// import React from 'react'

// const FlatList = () => {
//     const names = [
//         {
//             name:"abc",id:"1a"
//         },
//         {
//             name:"sdf",id:"2b"
//         },
//         {
//             name:"sdf",id:"3c"
//         }, 
//         {
//             name:"sdf",id:"4c"
//         },
//         {
//             name:"sdf",id:"5d"
//         },
//         {
//             name:"sdsf",id:"6e"
//         },
//     ]
//   return (
//     <View>
//       <FlatList data={names} renderItem={(element)=>{
//         return <Text>{element.item.name}</Text>
//       }} />
//     </View>
//   )
// }

// export default FlatList

import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'

const FlatList = () => {
  const [email,setEmail] = useState("")
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Forget Password?</Text>
      </View>
        <TextInput 
          style = {styles.email}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={text => setEmail(text)}
          value={email}
          placeholder = {'Email'}
          />
          <Pressable style={styles.submitButton} onPress={()=>{}}>
              <Text style={styles.submitText}>Submit</Text>
          </Pressable>
          <View style={styles.backToLogin_Container}>
              <Pressable onPress={()=>{Alert.alert("forget Passowrd")}}><Text style={styles.backToLogin_Text}>Back To Login</Text></Pressable>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff"
  },
  heading:{
    marginTop:"18%",
    textAlign:"center",
    fontSize:30,
  },
  email:{
      // flex:1,
      // display:"flex",
      // alignItems:"center", 
      // backgroundColor:"black",
      // justifyContent:'center',
      // backgroundColor:"#F5F3F3",
      // marginTop:"40%"
      marginTop:40,
      height:45,
      padding:10,
      marginLeft:"auto",
      marginRight:"auto",
      width:300,
      backgroundColor:"#F5F3F3",
      borderBottomColor:"black",
      borderBottomWidth:0.9,
  },
  submitButton:{
    height:45,
    marginTop:30,
    // padding:10,
    // color:"#609EF9",
    backgroundColor:"#609EF9",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginLeft:"auto",
    marginRight:"auto",
    width:180
},
submitText:{
    fontSize: 19,
    fontWeight: 'bold',
    color:"#fff",
    letterSpacing:1.3
},
backToLogin_Container:{
  display:"flex",
  alignItems:"center",
  marginTop:15,
},
backToLogin_Text:{
  color:"#6199EA",
  fontSize: 15,
  fontWeight: 'bold',
},
})

export default FlatList
