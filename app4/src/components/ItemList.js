import React, { Component } from 'react';
import { View } from 'react-native';
import Item from '../../src/components/Item';
import axios from 'axios';

export default class ItemList extends Component {

  componentWillMount() {
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
        .then(response => { console.log(response); })
        .catch(() => { console.log('Erro na execução'); });
  }

  render() {
    return (
      <View>
        <Item />
        <Item />
        <Item />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
