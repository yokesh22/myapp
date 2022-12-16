import React from 'react'
import { View, StyleSheet, Image, Text, Button, Dimensions } from 'react-native';

const BottomSearchScreen = (props) => {
  return (
    <View style = {styles.wrapper}>
        <View>
        <Image
            style={{flex: 2}}
            source={{
              uri: props.img,
              width: 180,
              height: 180,
            }}
          />
        <View style = {{flex:0}}>
        <Text style = {{color: 'white',fontSize:16.5,fontWeight: 'bold' ,width: Dimensions.get("window").width/2-50, paddingVertical:5}}>{props.title}</Text>
             <Text style = {{color: '#7d7d7d',fontSize:16, paddingBottom:5 ,width: Dimensions.get("window").width/2,}}>{props.content}</Text>
             <Button title="Follow" width={50} color="#262323" accessibilityLabel="Learn more about this purple button"
/>
        </View>
            
        </View>
    </View>
  )
}

export default BottomSearchScreen

const styles = StyleSheet.create({
   wrapper: {
    marginRight:20,
    paddingLeft: 20,
    paddingBottom:10
    // alignItems:'center'
   }
});