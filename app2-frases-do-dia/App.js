import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native'

const buttonPressed = () => {
  let randomNumber = Math.random();
  randomNumber = Math.floor(randomNumber * 5);

  let phrases = Array();

  phrases[0] = 'Frase 1';
  phrases[1] = 'Frase 2';
  phrases[2] = 'Frase 3';
  phrases[3] = 'Frase 4';
  phrases[4] = 'Frase 5';

  let chosenPhrase = phrases[randomNumber];

  alert(chosenPhrase);
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Image source={require('./assets/logo.png')}  />
        <TouchableOpacity style={styles.customButton} onPress={buttonPressed}>

          <Text style={styles.buttonText}>Nova frase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle: {
    fontSize: 30,
    backgroundColor: '#555',
    marginTop: 100,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  customButton: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 20,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
