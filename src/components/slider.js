import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, Image
} from 'react-native';
import Swiper from 'react-native-swiper';

export default class Slider extends Component<{}> {
  render() {
    return (
      <View style={styles.wrapper}>
     <Swiper style={styles.wrapper} showsButtons={true} autoplay>
             <View style={styles.slide1}>
               <Image source={require('../img/sayur1.jpg')} style={styles.img_container} >
               <Text style={styles.text}>Hello Swiper</Text>
             </Image>
             </View>
             <View style={styles.slide2}>
               <Image source={require('../img/sayur2.jpg')} style={styles.img_container} >
               <Text style={styles.text}>Page 2</Text>
             </Image>
             </View>
             <View style={styles.slide3}>
               <Image source={require('../img/sayur2.jpg')} style={styles.img_container} >
               <Text style={styles.text}>Page 3</Text>
             </Image>
             </View>
           </Swiper>
           </View>
    );
  }
}

module.export = Slider;

var styles = StyleSheet.create({
  wrapper: {
height:200
  },
  img_container: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    // resizeMode: 'contain',
    width:'100%',
    height:'100%'
  },
  slide1: {
    height:200,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
