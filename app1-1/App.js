import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


let gerarNumeroAleatorio = () => {
  let numeroAleatorio = Math.random() * 10;
  let numeroAleatorioFloor = Math.floor(numeroAleatorio);
  alert(numeroAleatorioFloor);
}
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button
          title= "Gerar número randômico."
          onPress= {gerarNumeroAleatorio}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
