import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';


export default class Header extends Component {
  constructor(){
    super()
    this.state = {
      title: "None",
      counter: 0,
    }
  }
  render(){
    return(
        <View style={styles.containerheader}>
          <TouchableOpacity style={styles.container} onPress={()=>{
            this.setState({title: "Component #1"})
            this.setState({counter: this.state.counter + 1})
            }}>
            <Text style={{fontWeight: "bold", fontSize: 26, textAlign: "center"}}>{this.state.title}</Text>
            <Text style={styles.textstyle}>*Touch Me!</Text>
            <View style={{flex: 1, justifyContent: "flex-end", fontSize: 20}}>
             <Text style={{fontWeight: "bold"}}>Touch Counter: {this.state.counter}</Text>
            </View>
          </TouchableOpacity>
        </View>
    )
  } 
}

const styles = StyleSheet.create({
  containerheader: {
    flex: 1,
    backgroundColor: "blue",
    borderWidth: 2,
    borderColor: "white",
    opacity: 0.7,
  },
  textstyle: {
    justifyContent: "center",
    fontSize: 20,
    width: "85%",
  },
  container: {
    flex: 1,
  },
})