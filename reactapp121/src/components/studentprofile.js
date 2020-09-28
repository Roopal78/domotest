import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
const StudentProfile=()=>{
    return(
        <View>
<Text style={style.stupro}>Student  Profile Component</Text>
        </View>
    )
}
const style=StyleSheet.create({

    stupro:{
        color:'white',
        fontWeight:'bold',
        fontSize:17,
        textAlign:'center',
        marginTop:50,

    
    }
})
export default StudentProfile;