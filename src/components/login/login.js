
import React, { Component } from 'react';
import {View,Image} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button,Text } from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class Login extends Component<{}> {
  constructor(props) {
   super(props);
   this.state = {username: '', password: ''};
 }

  loginAction(){
    fetch('http://192.168.0.5/sayur_api/index.php/auth/login', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'SAYUR-API-KEY': '37fe67653a1d5225180d00e5e022f90492010e7e'
  },
  body: JSON.stringify({
    username: this.state.username,
    password: this.state.password,
  })
})
.then((response) => response.json())
.then((responseJson) => {
   // return responseJson.movies;
  //  alert(responseJson.data.message);
    console.log(responseJson);
    if(responseJson.status){
      Actions.appContainer();
    }
    // this.setState({data: responseJson.data })
  })
   .catch((error) => {
      console.log(error);
   });
  }
  render() {
    return (
      <Container>
      <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input onChangeText={(text) => this.setState({username: text})}/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input onChangeText={(text) => this.setState({password: text})}/>
            </Item>
            <Button  onPress={()=>{this.loginAction()}} full rounded >
                        <Text>Primary</Text>
            </Button>
            <Button  onPress={()=>{Actions.appContainer()}} full rounded >
                        <Text>Skip Login</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

module.export = Login;
