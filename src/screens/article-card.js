import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import IonicE from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const ArticleCard = () => {
  return (
    <View style = {styles.container}>
        <View style = {styles.container1}>
        <View style = {styles.author}>
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
          }}
          style={{
            width: 20,
            height: 20,
            borderRadius: 20 / 2
          }}
        />
        <Text style = {{paddingHorizontal:10}}>
            Jacob Bennet in Level Up Coding
        </Text>
        </View>
        <View style = {styles.title}>
            <Text style = {{color: '#7d7d7d',textAlignVertical: "center",flex:1,paddingRight:22,fontSize:18,fontWeight: 'bold'}}>MY Salary Increased 13 times in 5 years - Here is How I Did It</Text>
            <Image style = {{flex: 2}}
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
          }}
          style={{
            width: '30%',
            height: '95%',
          }}/>
        </View>
        <View style = {styles.date}>
            <Text>Nov 8</Text>
            <Text style = {{paddingLeft:10}}>~ 10 min read</Text>
            <Ionic style = {{paddingLeft:10}} name = "ios-star" color = "#ebab34" size = {15}/>

        </View>
        <View style = {styles.category}>
            <Text>Selected for you</Text>
            <View style = {styles.threeIcons}>
                <MaterialIcons style = {{paddingHorizontal:5}} name = "favorite-outline" size = {30}/>
                <Ionic name = "remove-circle-outline" size = {30}/>
                <IonicE name = "dots-three-vertical" size = {25} />
            </View>
        </View>
        </View>
    </View>
  )
}

export default ArticleCard

const styles = StyleSheet.create({
    container: {
        flex:1,
        // width: '100%',
        // height: '50%',
        borderBottomWidth:1,
        borderTopWidth:1,
        borderColor: '#7d7d7d',
        paddingHorizontal: 0,
    },
    container1: {
        paddingHorizontal: 10 ,
        flex:0
    },
    author: {
        flexDirection: 'row',
        paddingTop:15,
        paddingBottom: 5,
        
    },

    title: {    
        flex: 0,
        flexWrap: 'wrap',
        flexDirection: 'row',
        
    },

    date: {
        flex:0,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 8,
    },

    category: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 8,
        justifyContent: 'space-between',
    },

    threeIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});