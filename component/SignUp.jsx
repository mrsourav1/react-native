import { StyleSheet, Text, View, Image, TextInput, ScrollView, KeyboardAvoidingView, Pressable, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import  { useState } from 'react'


const SignUp = ({
    navigation
}) => {
    const [name,setName] = useState("")
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile,setMobile] = useState('')
    const [passwordShow,setPasswordShow] = useState(true)
    const [ConfirmPasswordShow,setCondfirmPasswordShow] = useState(true)
    const [confirmPassword, setConfirmPassword] = useState('')
    
      return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
        
            <View style={styles.container1}>
              
                <ScrollView style={styles.s2} keyboardDismissMode='on-drag'>
                    <Text style={styles.head1}>Create a New Account</Text>
                    <Text style={styles.link2}>Already Registered?&nbsp;
                        <Text style={styles.link}
                            onPress={() => navigation.navigate('login')}
                        >
                            Login here
                        </Text>
                    </Text>
                    <View style={styles.formgroup}>
                        {/* <Text style={styles.label}>Name</Text> */}
                        <TextInput style={styles.input}
                        placeholder="Enter your Name"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={text => setName(text)}
                        value={name}
                         />
                    </View>
                    <View style={styles.formgroup}>
                        {/* <Text style={styles.label}>Email</Text> */}
                        <TextInput style={styles.input}
                        placeholder="Enter your Email"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={text => setEmail(text)}
                        value={email}
                        />
                    </View>
                    <View style={styles.formgroup}>
                        {/* <Text style={styles.label}>Mobile No.</Text> */}
                        <TextInput style={styles.input}
                        placeholder="Enter your Mobile No."
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={text => setMobile(text)}
                        value={mobile}
                        />
                    </View>
                    <View style={styles.formgroup}>
                        {/* <Text style={styles.label}>Password</Text> */}
                        <TextInput
                          style={styles.input}
                          secureTextEntry={passwordShow}
                          placeholder="Enter your password"
                          onChangeText={text => setPassword(text)}
                          value={password}
                        />
                        <TouchableOpacity>
                            {passwordShow?<Ionicons style={styles.eyeIcon} name="eye-off-outline" size={24} color="black" value={passwordShow} onPress={()=>{setPasswordShow(!passwordShow)}} />:<Ionicons name="eye-outline" style={styles.eyeIcon} size={24} color="black" value={passwordShow} onPress={()=>{setPasswordShow(!passwordShow)}}  />}
                        </TouchableOpacity>
                    </View>

                    <View style={styles.formgroup}>
                        {/* <Text style={styles.label}>Confirm Password</Text> */}
                        <TextInput style={styles.input} 
                        secureTextEntry={ConfirmPasswordShow}
                        placeholder="Confirm your Password"
                        onChangeText={text => setConfirmPassword(text)}
                        value={confirmPassword}
                        />
                        <TouchableOpacity>
                            {ConfirmPasswordShow?<Ionicons style={styles.eyeIcon} name="eye-off-outline" size={24} color="black" value={ConfirmPasswordShow} onPress={()=>{setCondfirmPasswordShow(!ConfirmPasswordShow)}} />:<Ionicons name="eye-outline" style={styles.eyeIcon} size={24} color="black" value={ConfirmPasswordShow} onPress={()=>{setCondfirmPasswordShow(!ConfirmPasswordShow)}}  />}
                        </TouchableOpacity>
                    </View>
                  
                    <Pressable onPress={()=>Alert.alert("wotkrdjb")}><Text style={styles.button1}>Signup</Text></Pressable>
                    <Text style={styles.label2}>By signing in, you agree to our&nbsp;
                        <TouchableOpacity style={styles.link}
                            onPress={() => navigation.navigate('Terms')}
                        >
                            <Text>Terms & Conditions</Text>
                        </TouchableOpacity>
                        <Text style={styles.label}>and &nbsp;</Text>
                        <TouchableOpacity style={styles.link}
                            onPress={() => navigation.navigate('Privacy')}

                        >
                           <Text>Privacy Policy</Text>
                           
                        </TouchableOpacity>
                        
                    
                        
                    </Text>
            


                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        // flex:1

    },
  
    container1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        marginTop:"30%"
    },

    s2: {
        display: 'flex',
        backgroundColor: '#F8F8FF',
        width: '100%',
        height: '90%',
  
        padding: 20,

    },
     head1: {
        fontSize: 25,
        color: 'black',
        textAlign: 'center',
        fontWeight: '500',
         marginVertical: 5,
        fontFamily: 'Arial'
       
    },
    formgroup: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginVertical: 3,
    },
    label: {
        fontSize: 14,
        color: '#000',
        marginLeft: 10,
        marginBottom: 3,
    },
    input: {
        backgroundColor: "#1a5acd42",
        borderRadius: 20,
        paddingVertical: 5,
        marginBottom: 3,
        paddingHorizontal: 10,
        
    },
    link: {
        color: '#4b0082',
        fontSize: 15,
        
    },
    link2: {
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 5,
    },
     label2: {
        fontSize: 17,
        color: '#000',
      
    },
        button1: {
        backgroundColor: '#5a5acd',
        color: '#fff',
        padding: 10,
        borderRadius: 20,
        fontSize: 20,
        minWidth: 150,
        textAlign: 'center',
       marginVertical: 10
    },
})