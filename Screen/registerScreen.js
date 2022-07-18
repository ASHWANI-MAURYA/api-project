import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React ,{useState,useContext}from "react";
import { AuthContext } from "../Component/context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay";
function RegisterScreen({ navigation }) {
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isLoading, register}=useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Spinner visible={isLoading} />
            {/* <Text>{val}</Text> */}
            <View style={styles.inputView}>
                <TextInput
                value={name}
                    style={styles.TextInput}
                    placeholder="Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setname(text)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                value={email}
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setEmail(text)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                value={password}
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={()=>{
                register(name,email,password);
            }} >
                <Text style={styles.loginText}>Register</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
                <Text >Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.Register_button}>Login</Text>
                </TouchableOpacity>
            </View>



        </View>
    )
}
export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },


    inputView: {
        // backgroundColor: "#FFC0CB",
        borderRadius: 10,
        borderWidth: 1,
        height: 45,
        marginBottom: 20,

        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        // marginLeft: 20,
    },

    Register_button: {
        height: 30,
        marginBottom: 30,
        color: 'blue'
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        alignItems: "center",
        padding: 10,
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#513252",
    },
    loginText: {
        color: 'white',
    }
});