import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import{createStackNavigator} from '@react-navigation/stack'


import CreateUser from './screens/CreateUser'
import Gallery from './screens/Gallery'
import Home from './screens/Home'
import Login from './screens/Login'




const Stack = createStackNavigator()


function MyStack(){
    return(
      // <Stack.Navigator  screenOptions={{headerShown: false}}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="CreateUser" component={CreateUser}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Gallery" component={Gallery}/>   
      </Stack.Navigator>

    )
}

export default function App() {



  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer> 
  );
}

