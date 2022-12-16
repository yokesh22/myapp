import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const CategorySearchScreen = (props) => {
  return (
    <View style = {styles.container}>
        <Text style = {{color:'white'}}>{props.name}</Text>
    </View>
  )
}

export default CategorySearchScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#262323',
        paddingHorizontal: 10,
        borderRadius: 20,
        marginVertical: 20,
        marginHorizontal: 10,
        paddingVertical:10,
        justifyContent: 'center'
    }
});