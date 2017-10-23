import React, {Component} from 'react';
import {View, Platform, StyleSheet, Image, ScrollView,TouchableHighlight} from 'react-native';
import Swiper from 'react-native-swiper';
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right
} from 'native-base';
import {Router,Scene,Stack,Actions} from 'react-native-router-flux';
import {Col, Row, Grid} from 'react-native-easy-grid';

export default class Category extends Component < {} > {
    render() {
        return (
            <Content>
                <Card>
                  <CardItem>
             <Left>
                 <Text style={styles.category_header}>Kategori</Text>
             </Left>
             <Right>
                <Text  onPress={()=>{Actions.sayuran({ kategori: 1 })}} style={styles.category_detail}>Semua Sayuran ></Text>
              </Right>
           </CardItem>
                    <CardItem style={styles.wrapper}>
                        <ScrollView horizontal>
                            <Grid>
                                <Col >
                                    <Row style={{
                                        backgroundColor: '#fff'
                                    }}>
                                    <TouchableHighlight onPress={()=>{Actions.sayuran()}}>
                                        <Image  source={require('../img/kategori/sayuran.png')} style={styles.img_container}>
                                            <Text style={styles.text} >Sayuran</Text>
                                        </Image>
                                        </TouchableHighlight>
                                        <TouchableHighlight onPress={()=>{Actions.buah()}}>
                                            <Image  source={require('../img/kategori/buah.png')} style={styles.img_container}>
                                                <Text style={styles.text} >Buah</Text>
                                            </Image>
                                            </TouchableHighlight>
                                            <TouchableHighlight onPress={()=>{Actions.daging()}}>
                                                <Image  source={require('../img/kategori/daging.png')} style={styles.img_container}>
                                                    <Text style={styles.text} >Daging</Text>
                                                </Image>
                                                </TouchableHighlight>
                                    </Row>
                                    <Row style={{
                                        backgroundColor: '#fff'
                                    }}>

                                    <TouchableHighlight onPress={()=>{Actions.ikan()}}>
                                        <Image  source={require('../img/kategori/ikan.png')} style={styles.img_container}>
                                            <Text style={styles.text} >Ikan</Text>
                                        </Image>
                                        </TouchableHighlight>
                                        <TouchableHighlight onPress={()=>{Actions.bumbu()}}>
                                        <Image source={require('../img/kategori/bumbu.png')} style={styles.img_container}>
                                            <Text style={styles.text}>Bumbu</Text>
                                        </Image>
                                      </TouchableHighlight>
                                      <TouchableHighlight onPress={()=>{Actions.lauk()}}>
                                        <Image source={require('../img/kategori/lauk.png')} style={styles.img_container}>
                                            <Text style={styles.text}>Lauk Non Daging </Text>
                                        </Image>
                                      </TouchableHighlight>
                                    </Row>
                                </Col>
                            </Grid>
                        </ScrollView>
                    </CardItem>
                </Card>
            </Content>

        );
    }
}

module.export = Category;

var styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        // flexWrap:'wrap',
        justifyContent: 'space-around'
    },
    img_container: {
        // flexBasis: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 2,
        height: 60,
        width: 100
    },
    text: {
        color: '#F0F4C3',
        fontSize: 15,
        fontWeight: 'bold'
    },
    category_header: {
        color: '#1B5E20',
        fontSize: 15,
        fontWeight: 'bold'
    },
    category_detail: {
        color: '#B0BEC5',
        fontSize: 10,
        // fontWeight: 'bold'
    }
})
