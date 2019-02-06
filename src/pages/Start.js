import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TextInput,
  TouchableOpacity 
} from 'react-native';


import Logo from '../components/Logo';

export default class Start extends Component<{}> {
  ologin() {
    Actions.ologin()
  }

	
	render() {
		return(
			<View style={styles.container}>
      <Logo/>
			<Text>hiee......hello</Text>

      <TouchableOpacity onPress={this.ologin}
      style={styles.button}>
             <Text style={styles.buttonText}>OWNER</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.button1}
           >
             <Text style={styles.buttonText}>TENANT</Text>
           </TouchableOpacity>
				
        	</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 60,
      paddingVertical: 15
  },
  button1: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 50,
      paddingVertical: 15
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
  
});
