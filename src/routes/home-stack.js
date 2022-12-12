import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './../screens/home-page';
import ArticleView from './../screens/article-view-screen';

const HomeStack  = createStackNavigator();
export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
       <HomeStack.Screen name = "Home" component = {HomeScreen} options = {{
        headerShown: false,
        headerStyle: {
            backgroundColor: 'black',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
       }} />
      <HomeStack.Screen name = "Article" component = {ArticleView} /> 
    </HomeStack.Navigator>
  )
}
