import { View, Text ,StyleSheet, TextInput,KeyboardAvoidingView,ScrollView, Button, Pressable} from 'react-native'
import React, { useState } from 'react'
import { useHeaderHeight } from '@react-navigation/elements'
// import { KeyboardAvoidingView } from 'react-native-w'

const EditProfile = () => {
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[phone,setPhone] = useState("")
    const height = useHeaderHeight()

  return (
    <>
        {/* <KeyboardAvoidingView> */}
        <KeyboardAvoidingView keyboardVerticalOffset={-500} behavior="padding" style={styles.container} >
        
            <ScrollView style = {styles.box} keyboardDismissMode="on-drag">
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
                    <Pressable style={styles.editButton} onPress={()=>{}}>
                        <Text style={styles.editText}>Edit</Text>
                    </Pressable>
                {/* </View> */}
            </ScrollView>
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
        flex:1,
        display:"flex",
        // alignItems:"center",
        backgroundColor:"black",
        // justifyContent:'center',
        backgroundColor:"#F5F3F3",
        marginTop:"35%"
    },
    name:{
        borderColor:"black",
        // marginTop:"58%",
        backgroundColor:"#F5F3F3",
        height:45,
        padding:10,
        marginLeft:"auto",
        marginRight:"auto",
        width:300,
        borderBottomColor:"black",
        borderBottomWidth:0.9,
        backgroundColor:"#F5F3F3",
    },
    email:{
        borderColor:"black",
        backgroundColor:"#F5F3F3",
        height:45,
        padding:10,
        marginLeft:"auto",
        marginRight:"auto",
        width:300,
        marginTop:25,
        borderBottomColor:"black",
        borderBottomWidth:0.9,
        backgroundColor:"#F5F3F3",
    },
    phone:{
        borderColor:"black",
        backgroundColor:"#F5F3F3",
        height:45,
        padding:10,
        marginLeft:"auto",
        marginRight:"auto",
        width:300,
        marginTop:25,
        borderBottomColor:"black",
        borderBottomWidth:0.9,
        backgroundColor:"#F5F3F3",
    },
    editButton:{
        height:45,
        marginTop:20,
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
    editText:{
        fontSize: 19,
        fontWeight: 'bold',
        color:"#fff",
        letterSpacing:1.3
    },
})

export default EditProfile