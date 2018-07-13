import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Icon from './src/components/icon';
import Topo from './src/components/topo';

export default class app3 extends Component {

  constructor(props) {
    super(props);

    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
  }

  jokenpo(escolhaUsuario) {
    const numeroAleatorio = Math.floor(Math.random() * 3);
    let escolhaComputador = '';

    switch (numeroAleatorio) {
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
      default: break;
    }

    let resultado = '';

    switch (escolhaComputador) {
      case 'pedra':
      switch (escolhaUsuario) {
        case 'pedra': resultado = 'Empate'; break;
        case 'papel': resultado = 'Você ganhou!'; break;
        case 'tesoura': resultado = 'Você perdeu!'; break;
        default: break;
      }
      break;

      case 'papel':
      switch (escolhaUsuario) {
        case 'pedra': resultado = 'Você perdeu!'; break;
        case 'papel': resultado = 'Empate!'; break;
        case 'tesoura': resultado = 'Você ganhou!'; break;
        default: break;
      }
      break;

      case 'tesoura':
      switch (escolhaUsuario) {
        case 'pedra': resultado = 'Você ganhou!'; break;
        case 'papel': resultado = 'Você perdeu!'; break;
        case 'tesoura': resultado = 'Empate!'; break;
        default: break;
      }
      break;
      default: break;
    }
    this.setState({ escolhaUsuario, escolhaComputador, resultado });
  }

  render() {
    return (
      <View>

        <Topo />

        <View style={styles.actionPanel}>

          <View style={styles.button} >
            <Button title='Pedra' onPress={() => { this.jokenpo('pedra'); }} />
          </View>

          <View style={styles.button}>
            <Button title='Papel' onPress={() => { this.jokenpo('papel'); }} />
          </View>

          <View style={styles.button}>
            <Button title='Tesoura' onPress={() => { this.jokenpo('tesoura'); }} />
          </View>

        </View>

        <View style={styles.stage}>
          <Text style={styles.textResult}>{this.state.resultado}</Text>

          <Icon choice={this.state.escolhaComputador} player='computer' />

          <Icon choice={this.state.escolhaUsuario} player='user' />

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 90,
  },
  actionPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  stage: {
    alignItems: 'center',
    marginTop: 10
  },
  textResult: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60,
  },
});

AppRegistry.registerComponent('app3', () => app3);
