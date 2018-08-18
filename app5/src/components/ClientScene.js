import React from 'react';
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native';
import NavigationBar from './NavigationBar.js';

const detalheCliente = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class ClientScene extends React.Component {
  render() {
    return (

      <View>
        <StatusBar backgroundColor='#FFF' />
        <NavigationBar />

          <View style={styles.titleView}>
            <Image source={detalheCliente} />
            <Text style={styles.titleText} >Nossos Clientes</Text>
          </View>

          <View style={styles.clientDetail}>
            <Image source={cliente1} />
            <Text style={styles.textClient} >Bla bla bla</Text>
          </View>

          <View style={styles.clientDetail}>
            <Image source={cliente2} />
            <Text style={styles.textClient} >Bla bla bla</Text>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  titleText: {
    color: '#B9C941',
    fontSize: 30,
    marginLeft: 10,
  },
  clientDetail: {
    padding: 20,
    marginTop: 10
  },

  textClient: {
    fontSize: 18,
    marginLeft: 20
  },

});
