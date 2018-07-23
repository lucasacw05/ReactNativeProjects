import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class Item extends Component {
  render() {
    return (
      <View style={styles.item}>

        <View style={styles.photo}>
          <Image style={{ height: 100, width: 100 }} source={{ uri: this.props.item.foto }} />
        </View>

        <View style={styles.itemDetails}>
          <Text style={styles.textTitle}>{this.props.item.titulo}</Text>
          <Text style={styles.textValue}>R$ {this.props.item.valor}</Text>
          <Text style={styles.textDetail}>Local: {this.props.item.local_anuncio}</Text>
          <Text style={styles.textDetail}>Dt publicação: {this.props.item.data_publicacao}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
  },
  photo: {
    height: 102,
    width: 102,
  },
  itemDetails: {
    marginLeft: 20,
  },
  textTitle: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5,
  },
  textValue: {
    fontSize: 16,
		fontWeight: 'bold'
  },
  textDetail: {
		fontSize: 16
  },
});
