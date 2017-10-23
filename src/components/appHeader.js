import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'

export default class AppHeader extends Component<{}> {
  render() {
    return (
        <Header>
          <Left>
          <Icon name='menu' style={{color: '#FFF'}}/>
          </Left>
          <Body>
            <Title>Sayuran</Title>
          </Body>
          <Right>
          <Icon name='cart' style={{color: '#FFF'}}/>
          </Right>
        </Header>
    );
  }
}

module.export = AppHeader;
