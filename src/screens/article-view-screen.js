import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';

const ArticleView = ({route, navigation}) => {
  const {key} = route.params;
  const {author} = route.params;
  const {title} = route.params;
  const {date} = route.params;
  const {length} = route.params;
  const {cat} = route.params;
  const {img} = route.params;
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}>
      <View style={styles.containerMain}>
        <View style={styles.categoryStyle}>
          <Image
            source={{
              uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
            }}
            style={{
              width: 30,
              height: 30,
              borderRadius: 30 / 2,
            }}
          />
          <Text style={{color: '#7d7d7d', paddingLeft: 10, fontSize: 17}}>
            {author}
          </Text>
        </View>
        <View style={styles.body}>
          <View style={styles.authorInfo}>
            <View style={styles.imageview}>
              <Image
                source={{
                  uri: 'https://miro.medium.com/max/653/1*27GzmuwyW2dRA2KwzP6OEw.png',
                }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 60 / 2,
                }}
              />
            </View>
            <View style = {{justifyContent:'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 10,
                  alignItems: 'center',
                }}>
                <Text
                  style={{color: '#7d7d7d', paddingRight: 10, fontSize: 15}}>
                  {author}
                </Text>
                <View
                  style={{
                    backgroundColor: 'green',
                    justifyContent: 'center',
                    borderRadius: 10,
                  }}>
                  <Text style={{color: 'white', paddingHorizontal: 10}}>
                    Follow
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 10,
                  alignItems: 'center',
                }}>
                <Text
                  style={{color: '#7d7d7d', paddingRight: 10, fontSize: 15}}>
                  {date}
                </Text>
                <Text style={{color: 'white',}}>
                    {length}
                  </Text>
              </View>
            </View>
          </View>
          <View>
                <Text style = {{color: '#7d7d7d', fontSize:20, fontWeight: 'bold', paddingHorizontal: 10}}>{title}</Text>
                <View style = {{alignItems:'center',paddingTop:20}}>
                <Image
            source={{
               uri: img,
            }}
            style={{
              width: Dimensions.get('window').width-100,
              height: Dimensions.get('window').width-250,
              resizeMode: 'cover'
              
            //   marginHorizontal:20,
            //   borderRadius: 30 / 2,
            }}
          />
          <Text style = {{color: '#7d7d7d', fontSize:18,paddingHorizontal:10,paddingTop:20, textAlign:'justify'}}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </Text>
                </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ArticleView;

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: 'black',
  },

  categoryStyle: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#7d7d7d',
    paddingVertical: 20,
  },

  body: {
    flex: 10,
    backgroundColor: 'black',
  },

  authorInfo: {
    flexDirection: 'row',
    padding: 10,
  },
});
