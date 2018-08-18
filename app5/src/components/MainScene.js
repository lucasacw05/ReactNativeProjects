import React from 'react';
import { View, StatusBar, Image, StyleSheet } from 'react-native';
import NavigationBar from './NavigationBar.js';

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

export default class MainScene extends React.Component {
  render() {
    return (

      <View>
        <StatusBar backgroundColor='#FFF' />
        <NavigationBar />

        <View style={styles.contentView} >
        <Image source={logo} style={styles.mainLogo} />
        <View style={styles.topIconView} >
          <Image source={menuCliente} style={styles.cliente} />
          <Image source={menuContato} style={styles.contato} />
        </View>

        <View style={styles.bottomIconView} >
          <Image source={menuEmpresa} style={styles.empresa} />
          <Image source={menuServico} style={styles.servico} />
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentView: {
    alignItems: 'center',
  },
  mainLogo: {
    marginTop: 30,
    alignItems: 'center'
  },
  topIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  bottomIconView: {
    flexDirection: 'row',
    alignContent: 'center'
  },
  cliente: {
    marginRight: 15,
    marginBottom: 15,
  },
  contato: {
    marginLeft: 15,
    marginBottom: 15,
  },
  empresa: {
    marginRight: 15,
    marginTop: 15,
  },
  servico: {
    marginLeft: 15,
    marginTop: 15,
  },
});
