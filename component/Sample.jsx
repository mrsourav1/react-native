import { View,ScrollView,StyleSheet, Text,TextInput,KeyboardAvoidingView, Platform, TouchableOpacity,Button, Pressable, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import checkcircleo from 'react-native-vector-icons/AntDesign';
import { Ionicons } from '@expo/vector-icons';
import {Dimensions} from 'react-native';
import { AuthContext } from '../Context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';
// import Spinner from 'react-native-loading-spinner-overlay/lib';

const Sample = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordShow,setPasswordShow] = useState(true)
    const {isLoading,Login} = useContext(AuthContext)

    // const Login = ({email,password}) =>{
    //             console.log("I ma calling")
    //             fetch("http://10.0.2.2:5000/api/v1/login",{
    //             method:'POST',
    //             headers:{
    //                 'Content-Type':'application/json',
    //             },
    //             body:JSON.stringify({
    //                 email:email,
    //                 password:password,
                    
    //             }),
                
    //         }).then(res=>{
    //             res.json()
    //             console.log(res)
    //         }).then(data=>{
    //             console.log(data)
    //         }
    //         ).catch(err=>{
    //             console.log(err)
    //         })
    //         // const json = await response.json()
    //         // const userInfo = await json;
    //         // console.log(userInfo);
    //         // setUserInfo(userInfo)
    //         // setIsLoading(false);
    //     }

  return (
    <>
    <KeyboardAvoidingView behavior='height' style={styles.container}>
        <Spinner visible={isLoading} />
        <ScrollView keyboardDismissMode='on-drag'>
            <TextInput 
            style = {styles.email}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder = {'Email'}
            />
            <View style={styles.passwordField}>
            <TextInput 
            secureTextEntry={passwordShow}
            style = {styles.password}
            onChangeText={text => setPassword(text)}
            value={password}
            // icon={<Text>Show</Text>}
            // iconPosition="left"
            placeholder = {'Password'}
            // keyboardAppearance="hidden"
            />
            <TouchableOpacity>
                {passwordShow?<Ionicons style={styles.eyeIcon} name="eye-off-outline" size={24} color="black" value={passwordShow} onPress={()=>{setPasswordShow(!passwordShow)}} />:<Ionicons name="eye-outline" style={styles.eyeIcon} size={24} color="black" value={passwordShow} onPress={()=>{setPasswordShow(!passwordShow)}}  />}
            </TouchableOpacity>
            </View>
            <View style={styles.forgetpassword_Container}>
                <Pressable onPress={()=>{Alert.alert("forget Passowrd")}}><Text style={styles.forgetpassword_Text}>forget password?</Text></Pressable>
            </View>
            <Pressable style={styles.loginButton} onPress={()=>{}}>
                <Text style={styles.loginText}>Login</Text>
            </Pressable>
            {/* <View style={styles.newUser_Container}>
                <Text style={styles.newUser_text}>New User? <Pressable ><Text style={{color:"blue",fontWeight:'bold'}}>SignUp</Text></Pressable></Text>
            </View> */}
            <View style={styles.newUser_Container}>
                <Text>New User? </Text><Pressable onPress={()=>navigation.navigate('SignUP')}><Text style={{color:"blue",fontWeight:'bold'}}>SignUp</Text></Pressable>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
    </>
  )
}
// #D3D3D3

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        display:"flex",
        // backgroundColor:"black",
        // justifyContent:"center",
        alignItems:"center",
        // justifyContent:"center"
    },
    email:{
        backgroundColor:"#F5F3F3",
        height:45,
        marginTop:"55%",
        padding:10,
        marginLeft:"auto",
        marginRight:"auto",
        width:300,
        borderBottomColor:"black",
        borderBottomWidth:0.9,
        // textAlign:"center"
        // position:'absolute'
    },
    passwordField:{
        display:"flex",
        flexDirection:"row",
        // backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center",
        height:78
    },
    password:{
        borderColor:"black",
        // marginTop:30,
        backgroundColor:"#F5F3F3",
        height:45,
        padding:10,
        marginLeft:"auto",
        marginRight:"auto",
        width:300,
        // position:"absolute",
        position:"relative",
        top:13,
        // textAlign:"center",
        borderBottomColor:"black",
        borderBottomWidth:0.9,
        
    },
    eyeIcon:{
        position:'absolute',
        right:9,
        
    },
    loginButton:{
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
    loginText:{
        fontSize: 19,
        fontWeight: 'bold',
        color:"#fff",
        letterSpacing:1.3
    },
    newUser_Container:{
        // backgroundColor:"black",
        marginTop:8,
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-end"
    },
    forgetpassword_Container:{
        display:"flex",
        alignItems:"flex-end",
        marginTop:5,
    },
    forgetpassword_Text:{
        color:"blue",
        fontSize: 15,
        fontWeight: 'bold',
    },

})


export default Sample