
import React, { Component } from 'react';
import {View,Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';


export default class AddItem extends Component<{}> {
  render() {
    return (

        <View style={{
          backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'}}>

    <View style={{
    backgroundColor: 'transparent',
    width: 300,
    height: 300}}>
    <Text>Hello World!</Text>
    </View>
    </View>

    );
  }
}

module.export = AddItem;
