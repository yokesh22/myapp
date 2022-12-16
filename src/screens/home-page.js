import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Dimensions} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import ArticleCard from './../components/article-card';
import IonicE from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import { FloatingAction } from "react-native-floating-action";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const cardDetails = [
  {
    key: '1',
    author: 'Yokesh in Level Up Coding',
    title: 'MY Salary Increased 13 times in 5 years - Here is How I Did It',
    date: 'Nov 8',
    length: '~ 10 min read',
    cat: 'Selected for you',
    img: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
  },
  {
    key: '2',
    author: 'John in Dev Genius',
    title: '9 Awesome CSS tools That You Should Use in 2022',
    date: 'Dec 30,2021',
    length: '~ 5 min read',
    cat: 'Based on your reading',
    img: 'https://cdn.mos.cms.futurecdn.net/Vp9WvV7YKdH4k8sKRePcE8.jpg',
  },
  {
    key: '3',
    author: 'Kiran in React Native',
    title: 'RoadMap for React Native in 2022',
    date: 'Nov 3',
    length: '~ 10 min read',
    cat: 'Popular on Medium',
    img: 'https://www.datocms-assets.com/45470/1631026680-logo-react-native.png',
  },
  {
    key: '4',
    author: 'Ivan Stoev in Level Up Coding',
    title: 'Should You Use PHP (Laravel) in 2023',
    date: 'Nov 14',
    length: '~ 4 min read',
    cat: 'Selected for you',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png',
  },
  {
    key: '5',
    author: 'Jacob R.Scott in Better Marketing',
    title: '21 Reasons Why You Should Be Leveraging Email Marketing',
    date: '2 days ago',
    length: '~ 3 min read',
    cat: 'Popular on Medium',
    img: 'https://www.feedough.com/wp-content/uploads/2020/08/what-is-marketing.png',
  },
  {
    key: '6',
    author: 'CodeCircuit in The Modern Scientist',
    title: '8 Open Source Development Tools Every Developer Must Know In 2023',
    date: 'Nov 27',
    length: '~ 6 min read',
    cat: 'Software Developement',
    img: 'https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Android-Developer.jpg',
  },
  {
    key: '7',
    author: 'Yash in Quick Code',
    title: 'The 5 Best JavaScript Frameworks in 2022',
    date: 'Jun 8',
    length: '~ 3 min read',
    cat: 'Selected for you',
    img: 'https://miro.medium.com/max/653/1*27GzmuwyW2dRA2KwzP6OEw.png',
  },
];

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View style={styles.container1}>
        <View style={styles.header}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            Home
          </Text>
          <Ionic
            style={{paddingRight: 5}}
            name="notifications-outline"
            color="white"
            size={25}
          />
        </View>
      </View>
      <View style={styles.container2}>
        <FlatList
          data={cardDetails}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Article', {
                    key: item.key,
                    author: item.author,
                    title: item.title,
                    date: item.date,
                    length: item.length,
                    cat: item.cat,
                    img: item.img,
                  })
                }>
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
                      <Text style={{paddingHorizontal: 10, color: 'white'}}>
                        {item.author}
                      </Text>
                    </View>
                    <View style={styles.title}>
                      <Text
                        style={{
                          color: '#7d7d7d',
                          textAlignVertical: 'center',
                          flex: 2,
                          paddingRight: 22,
                          fontSize: 18,
                          fontWeight: 'bold',
                        }}>
                        {item.title}
                      </Text>
                      <Image
                        style={{flex: 1}}
                        source={{
                          uri: item.img,
                          // width: 100,
                          // height: 70,
                        }}
                      />
                    </View>
                    <View style={styles.date}>
                      <Text style={{color: '#7d7d7d'}}>{item.date}</Text>
                      <Text style={{paddingLeft: 10, color: '#7d7d7d'}}>
                        {item.length}
                      </Text>
                      <Ionic
                        style={{paddingLeft: 10}}
                        name="ios-star"
                        color="#ebab34"
                        size={15}
                      />
                    </View>
                    <View style={styles.category1}>
                      <Text style={{color: '#7d7d7d'}}>{item.cat}</Text>
                      <View style={styles.threeIcons}>
                        <MaterialIcons
                          style={{paddingHorizontal: 5}}
                          name="favorite-outline"
                          size={30}
                          color="#7d7d7d"
                        />
                        <Ionic
                          name="remove-circle-outline"
                          size={30}
                          color="#7d7d7d"
                        />
                        <IonicE
                          name="dots-three-vertical"
                          size={25}
                          color="#7d7d7d"
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container1: {
    flex: 2,
    // height: '13%',
    // width: width,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
  },

  container2: {
    flex: 8,
    backgroundColor: 'black',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },

  // card style................

  container: {
    // width: '100%',
    // height: '50%',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#7d7d7d',
    paddingHorizontal: 0,
  },
  container1: {
    paddingHorizontal: 20,
  },
  author: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 5,
  },

  title: {
    flex: 0,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },

  date: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
  },

  category1: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    justifyContent: 'space-between',
  },

  threeIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
});
