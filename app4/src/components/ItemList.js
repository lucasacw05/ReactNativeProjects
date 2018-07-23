import axios from 'axios';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Item from '../../src/components/Item';


export default class ItemList extends Component {
  constructor(props) {
    super(props);

    this.state = { itemList: [] };
  }

  componentWillMount() {
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
        .then(response => { this.setState({ itemList: response.data }); })
        .catch(() => { console.log('Erro na execução'); });
  }

  render() {
    return (
      <ScrollView>
        { this.state.itemList.map(item => (<Item key={item.titulo} item={item} />)) }
      </ScrollView>
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
