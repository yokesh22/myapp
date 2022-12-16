import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';


const RecommendSearchScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.author}>
          <Image
            source={{
              uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
            }}
            style={{
              width: 20,
              height: 20,
              borderRadius: 20 / 2,
            }}
          />
          <Text style={{color: '#7d7d7d',paddingLeft:8}}>
            {props.author}
          </Text>
        </View>
        <View style={styles.title}>
          <Text
            style={{
              color: 'white',
            //   textAlignVertical: 'center',
              flex: 2,
              paddingRight: 20,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            {props.title}
          </Text>
          <Image
            style={{flex: 1}}
            source={{
              uri: props.img,
              width: 100,
              height: 70,
            }}
          />
        </View>
        <View style={styles.date}>
          <Text style={{color: '#7d7d7d'}}>{props.date}</Text>
          <Text style={{paddingLeft: 10, color: '#7d7d7d'}}>{props.length}</Text>
          <Ionic
            style={{paddingLeft: 10}}
            name="ios-star"
            color="#ebab34"
            size={15}
          />
        </View>
      </View>
    </View>
  );
};

export default RecommendSearchScreen;

const styles = StyleSheet.create({
    
  container1: {
    paddingHorizontal: 30,
    paddingVertical:15,
  },
  author: {
    flexDirection: 'row',
    paddingTop: 0,
    paddingBottom: 8,
  },

  title: {
    flexDirection: 'row',
  },

  date: {
    flexDirection: 'row',
    alignItems: 'center',
  },

});
