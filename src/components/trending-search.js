import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';


const TrendingSearchScreen = props => {
  return (
    <View style={styles.wrapper}>
      <View style={{paddingRight:20}}>
        <Text style={{color: '#2b2a2a', fontSize: 25, fontWeight: 'bold'}}>
          {props.no}
        </Text>
      </View>
      <View style={styles.content}>
        <View style={{flexDirection: 'column',  paddingRight:10, marginRight:20}}>
          <View style={{flexDirection: 'row'}}>
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
            <Text style = {{color: '#7d7d7d',paddingLeft:8}}>{props.authorname}</Text>
          </View>
          <Text style = {{color: 'white', fontSize:18, fontWeight: 'bold',paddingTop:8}}>{props.title}</Text>
          <Text style = {{color: '#7d7d7d', paddingVertical:8}}>{props.date}</Text>
        </View>
      </View>
    </View>
  );
};

export default TrendingSearchScreen;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingHorizontal:20,
    paddingTop: 20 ,
  },
});
