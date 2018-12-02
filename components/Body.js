import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default class Body extends Component {
  render(){
    return(
        <View style={styles.containerbody}>
          <Text style={{fontWeight: "bold", fontSize: 26, textAlign: "center"}}>Component #2 </Text>
          <Text style={styles.textstyle}>*Body!</Text>
        </View>
    )
  } 
}

const styles = StyleSheet.create({
      containerbody: {
        flex: 1,
        backgroundColor: "red",
        borderWidth: 2,
        borderColor: "yellow",
        opacity: 0.5,
      },
      textstyle: {
        alignItems: "center",
        fontSize: 21,
        width: "85%",
      }
})