import React, { Component } from 'react';  
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';  
  
export default class ButtonComponent extends Component {  
    onPressButton() {  
        Alert.alert('You clicked the button!')  
    }  
  
    render() {  
        return (  
            <View style={styles.container}>  
                <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={this.onPressButton}  
                        title="Press Me"  
                        color="white"
                    />  
                </View>  
                <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={this.onPressButton}  
                        title="Press Me"  
                        color="white"  
                    />  
                </View>  
                <View style={styles.multiButtonContainer}>  
                    <Button  
                        onPress={this.onPressButton}  
                        title="A disabled button"  
                        disabled={true}  
                    />  
                    <Button  
                        onPress={this.onPressButton}  
                        title="OK!"  
                        color="#009933"  
                    />  
                </View>  
            </View>  
        );  
    }  
}  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
    },  
    buttonContainer: {  
        margin: 10 ,
        backgroundColor:'blue',
        width:150,
        height:50 ,
        textAlign:'center'
       
    },  
    multiButtonContainer: {  
        margin: 20,  
        // flexDirection: 'row',  
        justifyContent: 'space-between'  ,
    }  
})  