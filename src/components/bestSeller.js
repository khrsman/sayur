
import React, { Component } from 'react';
import {View,Image,StyleSheet,TouchableHighlight,TouchableOpacity,ScrollView,FlatList} from 'react-native';
import Modal from 'react-native-simple-modal';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import {Actions} from 'react-native-router-flux';


export default class BestSeller extends Component<{}> {

  constructor(props){
    super(props)
    this.state={
      data: [],
      modalVisible: false,
      open: false,
      image: {uri: 'http://192.168.0.5/sayur_api/assets/image/badwang.jpg'}
    }
  }
  setModalVisible(visible) { this.setState({modalVisible: visible}); }
  componentDidMount(){
   var kategori = 0;
     switch(this.props.title) {
       case 'Sayuran':
           kategori= 1
           break;
       case 'Buah':
             kategori= 2
             break;
      case 'Daging':
            kategori= 3
            break;
     case 'Ikan':
            kategori= 4
            break;
    case 'Bumbu':
           kategori= 5
           break;
           case 'Lauk':
                  kategori= 6
                  break;
       default:
   }
  //  console.log(this.props.title)
  //  console.log(kategori);
   this.getData(kategori)
  }
  getData(kategori){
    let url ='http://192.168.0.5/sayur_api/index.php/produk/best_seller';
      fetch(url, {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'SAYUR-API-KEY': '37fe67653a1d5225180d00e5e022f90492010e7e'
  }
  })
      .then((response) => response.json())
      .then((responseJson) => {
          console.log(responseJson.data);
          this.setState({data: responseJson.data })
        })
         .catch((error) => {
            console.log(error);
         });
  }
  _keyExtractor = (item, index) => item.id_sayur;
  getImage(image_url){
    console.log('loaded ');

    if(image_url){
      return <Image source={{uri: image_url}} style={{height: 70, width: 100, flex: 1, resizeMode:'contain'}}/>
    } else {
      return <Image source={require('../img/img_default.png')} style={{height: 70, width: 70, flex: 1, resizeMode:'contain'}}/>
    }
  }
  _renderItem = ({item}) => (
    <View style={{ margin:1, padding:5, borderRadius: 5 }}>
      {this.getImage(item.gambar)}
          <Text style={styles.name}>{item.nama} </Text>
      <Text style={styles.price}>Rp. 10.000/Kg</Text>


      <Button full success  onPress={() => this.setState({open: true})} small>
        <Text>Beli</Text>
      </Button>

    </View>
 );
  render() {
    return (
<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
<Content>
  <Card>
    <CardItem>
      <Left>
  <Text style={styles.header}>
    Produk Terlaris
  </Text>
</Left>
</CardItem>
    <CardItem>
  <FlatList
    horizontal
        data={this.state.data}
        keyExtractor= {this._keyExtractor}
        renderItem= {this._renderItem}
        numColumns={1}
      />
    </CardItem>
  </Card>
    </Content>
     <Modal
            animationDuration={100}
            animationTension={20}
           offset={this.state.offset}
           open={this.state.open}
           style={{alignItems: 'center'}}>
           <View>
             <Text style={{fontSize: 20, marginBottom: 10}}>Hello world!</Text>
             <TouchableOpacity
             style={{margin: 5}}
             onPress={() => this.setState({offset: -100})}>
               <Text>Move modal up</Text>
             </TouchableOpacity>
             <TouchableOpacity
               style={{margin: 5}}
               onPress={() => this.setState({offset: 0})}>
               <Text>Reset modal position</Text>
             </TouchableOpacity>
             <TouchableOpacity
               style={{margin: 5}}
               onPress={() => this.setState({open: false})}>
               <Text>Close modal</Text>
             </TouchableOpacity>
           </View>
         </Modal>
  </View>


    );
  }
}

module.export = BestSeller;

var styles = StyleSheet.create({
    name: {
     fontSize: 12,
     marginBottom: 3
   },
   price: {
    fontSize: 10,
    color: '#F4511E',
    marginBottom: 3
  },
  header: {
      color: '#1B5E20',
      fontSize: 15,
      fontWeight: 'bold'
  },
});
