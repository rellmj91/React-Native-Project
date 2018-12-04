import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import AppContain from './components/Navigation';


export default class Main extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: "black"}}>
      <AppContain /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
});