import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
// import e from "express";
import React, { createContext, useState } from "react";
import { BASE_URL } from '../config';
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const register = (name, email, password) => {
        setIsLoading(true);
        axios
            .post(`${BASE_URL}/post`, {
                name, email, password,
            })
            
            .then(res => {
                let userInfo = res.data;
                setUserInfo(userInfo);
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                setIsLoading(false)
                console.log(userInfo);

            })
            .catch(e => {
                console.log(`register error ${e}`);
                setIsLoading(false);
            });
        console.log("reg is click")

    };
    const login=(email,password)=>{
        setIsLoading(true);
        axios.post(`${BASE_URL}/getAll`,{
            email,password
        }).then(res=>{
            let userInfo=res.data;
            console.log(userInfo);
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo',JSON.stringify(userInfo));
            setIsLoading(false);
        }).catch(e=>{
            console.log(`Login error ${e}`);
            setIsLoading(false);
        });
        console.log("login.. is click")

    };
    const logout=()=>{
        setIsLoading(true);

        axios.post(`${BASE_URL}/delete`,
        {},
        {
            headers:{Authorization:`Bearer ${userInfo.access_token}`},
        },
        ).then(res=>{
            console.log(res.data);
            AsyncStorage.removeItem('userInfo');
            setUserInfo({})
            setIsLoading(false)
        })
        .catch(e=>{
            console.log(`logout error ${e}`);
            setIsLoading(false);
        });
        console.log("log")
    }
    
    return (
        <AuthContext.Provider 
        value={{
            isLoading,
            userInfo,
            register,
            login,
            logout,
        }}>
            {children}
            </AuthContext.Provider>
    );
    
};