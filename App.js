/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Image, ScrollView
} from 'react-native';
import {Router,Scene,Stack,Actions,Modal,Tabs} from 'react-native-router-flux';
import { StyleProvider,Container, Header,Left, Body,Title,Icon } from 'native-base';
 import getTheme from './src/themes/components';
import material from './src/themes/variables/material'

import Sayuran from './src/components/pages/sayuran';
import Home from './src/components/home';
import AddItem from './src/components/addItem';
import AppHeader from './src/components/appHeader';


export default class App extends Component<{}> {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>

        <Router>
          <Scene key="modal" modal>
          <Scene key="root" navBar={AppHeader} >
            <Scene key="home" component={Home} title='AppContainer' hideNavBar/>
            <Tabs showLabel={true} key="tabbar" lazy={true} labelStyle={{ fontSize: 7 }} tabBarStyle={{ backgroundColor: '#64DD17', flex: 1, flexDirection: 'column',flexWrap:'wrap' }}
                  tabBarPosition="top" hideNavBar>
                <Scene key="sayuran" component={Sayuran}  title='Sayur' hideNavBar/>
                <Scene  key="buah" component={Sayuran} title='Buah' hideNavBar/>
                <Scene key="daging" component={Sayuran} title='Daging' hideNavBar/>
                <Scene key="ikan" component={Sayuran} title='Ikan' hideNavBar/>
                <Scene key="bumbu" component={Sayuran} title='Bumbu' hideNavBar/>
                <Scene key="lauk" component={Sayuran} title='Lauk' hideNavBar/>
           </Tabs>
          </Scene>
          <Scene key="addItem" component={AddItem} title='Buah' hideNavBar/>
          </Scene>
        </Router>
  </StyleProvider>


    );
  }
}
