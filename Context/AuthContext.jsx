import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Axios } from ' react-native-axios';

// const loginUrl = "http://localhost:5000/api/v1/login"

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const[isLoading,setIsLoading] = useState(false);
    const [userInfo,setUserInfo] = useState({})
    const [splashLoading,setSplashLoading] = useState(false);

    // const Login =  async (email,password)=>{
    //     setIsLoading(true)
    //     const res = await axios.post(loginUrl,{
    //         email,
    //         password,
    //     }).then(res =>{
    //         const userInfo = res.data;
    //         console.log(userInfo);
    //         setUserInfo(userInfo)
    //         setIsLoading(false);
    //     }).catch(err=>{
    //         console.log(err)
    //         setIsLoading(false)
    //     })
    // }
    const Login = async(email,password)=>{
        try{
            setIsLoading(true)
            const res = await axios.post("http://10.0.2.2:5000/api/v1/login",{
                email,
                password,
            });
            const userInfo = await res.data;
            await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            console.log(userInfo);
            setUserInfo(userInfo)
            setIsLoading(false);
            if(userInfo){
                console.log("code is present")
            }

        }catch(err){
            console.log(err)
            setIsLoading(false)
        }
    }

    const isLogin = async ()=>{
        try{
            setSplashLoading(true)
            const userInfo = await AsyncStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo);

            if (userInfo){
                setUserInfo(userInfo)
            }
            setSplashLoading(false);
        }catch(e){
            setSplashLoading(false);
            console.log(e)
        }
    }

    useEffect(() => {
        isLogin();
    }, []);

    // const Login = () =>{
    //     try{
    //             fetch("http://localhost:5000/api/v1/login",{
    //             method:'POST',
    //             headers:{
    //                 'Content-Type':'application/json',
    //             },
    //             body:JSON.stringify({
    //                 email:email,
    //                 password:password
    //             }),
    //         }).then(res=>{
    //             response.json()
    //         }).then(data=>{
    //             console.log(data)
    //         }
    //         )
    //         // const json = await response.json()
    //         // const userInfo = await json;
    //         // console.log(userInfo);
    //         // setUserInfo(userInfo)
    //         // setIsLoading(false);
    //     }catch(err){
    //         console.log(err)
    //     }
    // }

  return (
    <AuthContext.Provider value={{
        isLoading,
        userInfo,
        Login,
        isLogin,
        splashLoading
    }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;