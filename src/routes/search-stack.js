import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './../screens/search-page';

const SearchStack = createStackNavigator();

export const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
        <SearchStack.Screen name = "Search" component = {SearchScreen} options = {{
        headerShown: false,
        headerStyle: {
            backgroundColor: 'black',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
       }} />
      {/* <SearchStack.Screen name = "Article" component = {ArticleView} />  */}
    </SearchStack.Navigator>
  )
}
