import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Image, ScrollView
} from 'react-native';
import {Router,Scene,Stack} from 'react-native-router-flux';
import { StyleProvider,Container, Header,Left, Body,Title } from 'native-base';
 import getTheme from '../themes/components';
import material from '../themes/variables/material'
import AppHeader from './appHeader';
import Slider from './slider';
import Category from './category';
import BestSeller from './bestSeller';
import Promo from './promo';


export default class Home extends Component<{}> {
  render() {
    return (

      <Container style={{backgroundColor: '#E0E0E0' }}>

        {/* <AppHeader /> */}
          <ScrollView >
        <Slider />
         <Category />
         <BestSeller />
         <Promo />
         </ScrollView>
       </Container>
        

    );
  }
}

module.export = Home;
