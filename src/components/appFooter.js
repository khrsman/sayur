
import React, { Component } from 'react';
// import {} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base'
import {Actions} from 'react-native-router-flux';


export default class AppFooter extends Component<{}> {
  constructor(props) {
   super(props);
   this.state = {active: false};
   this.tab_feed = {active: false};
   this.tab_about = {active: false};
   this.tab_news = {active: false};
 }

 tabAction(tab){
   this.setState({tab_feed: false});
   this.setState({tab_about: false});
   this.setState({tab_news: false});
   if(tab === "feed"){
     this.setState({tab_feed: true});
     Actions.feed()
   } else if (tab === "news") {
      this.setState({tab_news: true});
     Actions.news()
   } else if (tab === "about") {
     this.setState({tab_about: true});
     Actions.about()
   }
 }

  render() {
    return (
        <Footer>
          <FooterTab>
            <Button active={this.state.tab_feed} onPress={() => this.tabAction("feed")}>
              <Text>Feed</Text>
            </Button>
            <Button active={this.state.tab_news} onPress={() => this.tabAction("news")}>
              <Text>News</Text>
            </Button>
            <Button active={this.state.tab_about} onPress={() => this.tabAction("about")}>
              <Text>About</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
  changeActive= ()=> {
    this.setState({active: false});
  }
}

module.export = AppFooter;
