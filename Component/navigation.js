import { Text, View } from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../Screen/homeScreen";
import LoginScreen from "../Screen/loginScreen";
import RegisterScreen from "../Screen/registerScreen";
import { AuthContext } from "../Component/context/AuthContext";
const Stack = createNativeStackNavigator();

function navigation() {
    const { userInfo } = useContext(AuthContext);
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {userInfo.access_token ? (
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    ) : (
                        <>
                        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default navigation;