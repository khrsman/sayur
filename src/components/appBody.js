
import React, { Component } from 'react';
import {View,Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import AppBodyData from './appBodyData';


export default class AppBody extends Component<{}> {
  constructor(){
    super()
    this.state={
      data: []
    }
  }
  componentDidMount(){
   this.getData();
  }
  getData(){
      fetch('http://192.168.0.5/gchat_web_api/index.php/store/store/list_kategori_produk?id_koperasi=0003', {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'GCHAT-API-KEY': '37fe67653a1d5225180d00e5e022f90492010e7e'
  }
  })
      .then((response) => response.json())
      .then((responseJson) => {
         // return responseJson.movies;
        //  alert(responseJson.data.message);
        //  console.log(responseJson.data);
          this.setState({data: responseJson.data })
        })
         .catch((error) => {
            console.log(error);
         });
  }
  render() {
    return (
      <AppBodyData data= {this.state.data}/>
    );
  }
}

module.export = AppBody;
