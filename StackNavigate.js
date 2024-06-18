import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/Login/LoginScreen';
import RegisterScreen from './Screens/Register/RegisterScreen';
import HomeScreen from './Screens/Home/HomeScreen';


const StackNavigate = () => {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          </Stack.Navigator>
      </NavigationContainer>
    )
}

export default StackNavigate

const styles = StyleSheet.create({})