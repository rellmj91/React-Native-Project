
import React, { Component } from 'react';
import {createStackNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet, View, Text, Button } from 'react-native';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Login from './Login';


class HomeScreen extends Component {
    render(){
        return(
            <View style={{flex: 1, backgroundColor: "black"}}>
                <Header />
                <Body />
                <Footer />
                <Button 
                    title= "Change Screen"
                    onPress={()=> this.props.navigation.navigate("Updates")}
                />
            </View>
        )
    }
}

class UpdatesScreen extends Component {
    render(){
        return(
            <View>
                <Text>This is our second Router Screen</Text>
            </View>
        )
    }
}

class LoginScreen extends Component {
    render(){
        return(
            <View>
                <Text>This will be our Login Screen</Text>
                <Login />
            </View>
        )
    }
}
const Nav = createStackNavigator({
    Home: HomeScreen,
    Updates: UpdatesScreen,
    Login: LoginScreen,
},
    { initialRouteName: "Login" }
)

const AppContainer = createAppContainer(Nav)
const styles = StyleSheet.create({
})

export default class AppContain extends Component {
    render(){
        return <AppContainer />
    }
}