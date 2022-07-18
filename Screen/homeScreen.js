import { useContext } from 'react';
import {Button,StyleSheet,Text,View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import  {AuthContext} from '../Component/context/AuthContext';

function HomeScreen(){
    const {userInfo,isLoading,logout}=useContext(AuthContext);
    return(
        <View style={styles.container}>
            <Spinner visible={isLoading}/>
            <Text style={styles.welcome}>WELCOME{userInfo.user.name}</Text>
            <Button title='LOG OUT' color="red" onPress={logout}/>
            <Text>sdfghjk</Text>
        </View>
    )
}
export default HomeScreen;
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
    },
    welcome:{
        fontSize:18,
        marginBottom:8,

    }
})