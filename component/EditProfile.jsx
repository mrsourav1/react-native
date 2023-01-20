import { View, Text ,StyleSheet, TextInput,KeyboardAvoidingView,ScrollView} from 'react-native'
import React, { useState } from 'react'
// import { KeyboardAvoidingView } from 'react-native-w'

const EditProfile = () => {
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[phone,setPhone] = useState("")

  return (
    <>
        {/* <KeyboardAvoidingView> */}
        <KeyboardAvoidingView behavior='padding' style={styles.container} >
            <View style = {styles.box} keyboardDismissMode="on-drag">
                {/* <View style={styles.nameField}> */}
                    <TextInput 
                    style = {styles.name}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={text => setName(text)}
                    value={name}
                    placeholder = {'Name'}
                    />
                {/* </View> */}
                {/* <View style={styles.emailField}> */}
                    <TextInput 
                    style = {styles.email}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    placeholder = {'Email'}
                    />
                {/* </View> */}
                {/* <View style={styles.phoneField}> */}
                    <TextInput 
                    style = {styles.phone}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={text => setPhone(text)}
                    value={phone}
                    placeholder = {'Mobile No.'}
                    keyboardType='decimal-pad'
                    maxLength={10}
                    />
                {/* </View> */}
            </View>
        </KeyboardAvoidingView>
        {/* </KeyboardAvoidingView> */}
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    box:{
        flex:0.9,
        display:"flex",
        alignItems:"center",
        // backgroundColor:"black",
        justifyContent:'center'
    },
    name:{
        borderColor:"black",
        marginTop:"58%",
        backgroundColor:"#F5F3F3",
        height:45,
        padding:10,
        marginLeft:"auto",
        marginRight:"auto",
        width:300,
    }
})

export default EditProfile