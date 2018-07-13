import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const pedraImg = require('../../imgs/pedra.png');
const papelImg = require('../../imgs/papel.png');
const tesouraImg = require('../../imgs/tesoura.png');

class Icon extends Component {
  render() {
      if (this.props.escolha === 'pedra') {
        return (
          <View style={styles.icon}>
            <Text style={styles.textPlayer}>{this.props.player}</Text>
            <Image source={pedraImg} />
          </View>
        );
      } else if (this.props.escolha === 'papel') {
        return (
          <View>
            <Text style={styles.textPlayer}>{this.props.player}</Text>
            <Image source={papelImg} />
          </View>
        );
      } else if (this.props.escolha === 'tesoura') {
        return (
          <View>
            <Text style={styles.textPlayer}>{this.props.player}</Text>
            <Image source={tesouraImg} />
          </View>
        );
      }
      return false;
  }
}

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    marginBottom: 20
  },
  textPlayer: {
    fontSize: 18
  }
});

export default Icon;
