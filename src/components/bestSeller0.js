import React, {Component} from 'react';
import {View, Platform, StyleSheet, Image, ScrollView} from 'react-native';
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
import {Col, Row, Grid} from 'react-native-easy-grid';

export default class BestSeller extends Component < {} > {
    render() {
        return (
            <Content>
                <Card>
                  <CardItem>
             <Left>
                 <Text style={styles.category_header}>Produk Terlaris</Text>
             </Left>
             {/* <Right>
                <Text style={styles.category_detail}>Semua Sayuran ></Text>
              </Right> */}
           </CardItem>
                    <CardItem style={styles.wrapper}>
                        <ScrollView horizontal>
                            <Grid>
                                <Col >
                                    <Row style={{
                                        backgroundColor: '#fff'
                                    }}>
                                        <Image source={require('../img/daging.jpg')} style={styles.img_container}>
                                            <Text style={styles.text}>Daging</Text>
                                        </Image>
                                        <Image source={require('../img/sayur_buah.jpg')} style={styles.img_container}>
                                            <Text style={styles.text}>Buah</Text>
                                        </Image>
                                        <Image source={require('../img/sayur_daun.jpg')} style={styles.img_container}>
                                            <Text style={styles.text}>Sayuran</Text>
                                        </Image>
                                        <Image source={require('../img/daging.jpg')} style={styles.img_container}>
                                            <Text style={styles.text}>Bumbu Masak</Text>
                                        </Image>
                                        <Image source={require('../img/sayur_buah.jpg')} style={styles.img_container}>
                                            <Text style={styles.text}>Ikan</Text>
                                        </Image>
                                    </Row>
                                    <Row style={{
                                        backgroundColor: '#fff'
                                    }}>
                                        <Image source={require('../img/daging.jpg')} style={styles.img_container}>
                                            <Text style={styles.text}>Daging</Text>
                                        </Image>
                                        <Image source={require('../img/sayur_buah.jpg')} style={styles.img_container}>
                                            <Text style={styles.text}>Sayur Buah</Text>
                                        </Image>
                                        <Image source={require('../img/sayur_daun.jpg')} style={styles.img_container}>
                                            <Text style={styles.text}>Sayur Daun</Text>
                                        </Image>
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

module.export = BestSeller;

var styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        // flexWrap:'wrap',
        justifyContent: 'space-around'
    },
    img_container: {
        // flexBasis: '100%',
        alignItems: 'center',
        borderRadius: 10,
        margin: 2,
        height: 60,
        width: 100
    },
    text: {
        color: '#fff',
        fontSize: 15,
        // fontWeight: 'bold'
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
