import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default class Footer extends Component {
  render(){
    return(
        <View style={styles.containerfooter}>
          <Text style={{fontWeight: "bold", fontSize: 26, textAlign: "center"}}>Component #3 </Text>
          <Text style={styles.textstyle}>Footer!</Text>
        </View>
    )
  } 
}

const styles = StyleSheet.create({
    containerfooter: {
        flex: 1,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        opacity: 0.5,
      },
      textstyle: {
        justifyContent: "center",
        fontSize: 20,
        width: "85%",
      }
  })