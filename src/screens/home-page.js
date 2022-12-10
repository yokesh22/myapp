import React from 'react';
import {View,Text, StyleSheet, ScrollView} from 'react-native';
import { Dimensions } from "react-native";
import Ionic from 'react-native-vector-icons/Ionicons';
import ArticleCard from './article-card';


class HomeScreen extends React.Component {
    render() {
        var width = Dimensions.get('window').width; 
        var height = Dimensions.get('window').height; 
        return (
                <View style = {{backgroundColor:'black',flex:1}}>
                <View style = {styles.container}>
                    <View style = {styles.header}>
                        <Text style = {{color: "white", fontWeight: 'bold', fontSize: 20, }}> Home </Text>
                        <Ionic name = 'notifications-outline' color = "white" size = {25} />
                    </View>
                </View>
                <ScrollView>
                <View>
                    <ArticleCard/>
                    <ArticleCard/>
                    <ArticleCard/>
                    <ArticleCard/>
                    <ArticleCard/>
                    <ArticleCard/>
                    
                    
                </View>
                </ScrollView>
                
            </View>
        );
    }
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        height: '13%',
        width: '100%',
        backgroundColor: 'black',
        justifyContent: 'flex-end',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,

    }



});