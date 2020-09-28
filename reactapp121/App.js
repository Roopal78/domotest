/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/*import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const instructions=Platform.select({
  ios:'Press cmd+R to reload',
  androidf:'double tab r on your keyboard',
});

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> This is my first react native application
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes in Iphone</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
*/

import React from 'react';
import { StyleSheet, Text, View ,Button,TextInput, ScrollView,Image} from 'react-native';
// import StudentProfile from './src/components/studentprofile';
// import Greet from './src/components/greetings';
// import ButtonComponent from './src/components/buttons';

export default class App extends React.Component {
  //creating the state
  state={
    firststate:"here we are going to state"
  }
  //updating the state
  updateState = () => this.setState({ firststate: 'The state is updated' })

   render() {
      return (
         <View style = {styles.container}>
         
            <Text style={styles.headingStying}>Welcome to Student Portal</Text>
            <TextInput  placeholder = "Eneter your name"/>
             <Text style={styles.headingStying} onPress={this.updateState} >{this.state.firststate}</Text>

 
<View style={styles.boxContainer}>
<Text style={styles.box1}>Home</Text>
<Text style={styles.box2}>About us</Text>
<Text style={styles.box3}>Maps</Text>
<Text style={styles.box4}>Contact us</Text>
</View>
<View style={styles.portalContainer1}>
<Text style={styles.portal1}>Announcements</Text>
<Text style={styles.portal1}>DMCS</Text>
<Text style={styles.portal1}>Announcements</Text>

     </View> 
     <View style={styles.portalContainer2}>
<Text style={styles.portal2}>Announcements</Text>
<Text style={styles.portal1}>DMCS</Text>
<Text style={styles.portal1}>Announcements</Text>

     </View> 
     <View style={styles.portalContainer3}>
     <Text style={styles.portal1}>Announcements</Text>
     <Text style={styles.portal1}>DMCS</Text>
     <Text style={styles.portal1}>Announcements</Text>
     
          </View> 
          <ScrollView>

         
          <Text style={{fontSize:25, backgroundColor:'skyblue',textAlign:'center'}}>Scoll   Down to see more </Text>
          
          <Text>Here we go..</Text>
          <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 400, height: 300}} />
       <Text>scroll fourth line</Text>
          <Text>scroll fifth line</Text>
          <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 400, height: 400}} />

       <Text>scroll fourth line</Text>
          <Text>scroll fifth line</Text>
          <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 400, height: 400}} />


       </ScrollView>
       </View>
       
      
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white',
      textAlign:'center',
      fontSize:22,
      marginBottom:-50,
      marginTop:50
   },
   headingStying: {
     color: 'black',
     fontSize:26,
     textAlign:'center'
     
   },
   steelblue:{  
    height: 150, width:150,backgroundColor: 'steelblue'  
},  
  //  stuContainer:{
  //    marginTop:20,
  //    marginBottom:150,

  //  },
  boxContainer:{
    
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
   box1:{
    width:80,
    height:30,
     backgroundColor:'red',
     margin:10,
     textAlign:'center',
     padding:5
     
     
   },
   box2:{
    width:80,
    height:30,
    backgroundColor:'yellow',
    margin:10,
    textAlign:'center',
    padding:5
    
  }, box3:{
    width:80,
    height:30,
    margin:10,
    backgroundColor:'coral', 
    textAlign:'center',
    padding:5

    
  
  }, box4:{
    width:80,
    height:30,
    margin:10,
    backgroundColor:'skyblue',
    textAlign:'center',
    padding:5
   
  },
  portalContainer1:{
    
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  portalContainer2:{
    
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin:-420
  },
  portalContainer3:{
    
    flexDirection:'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  
  },
  portal1:{
    width:100,
    height:100,
    backgroundColor:'lightgreen',
    margin:20
  },
  portal2:{
    width:100,
    height:100,
    backgroundColor:'skyblue',
    margin:20
  }
});
