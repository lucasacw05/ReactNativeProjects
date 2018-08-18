import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class NavigationBar extends React.Component {
  render() {
    return (
      <View style={styles.navBar}>
        <Text style={styles.navBarTitle}>Atm Consultoria</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#CCC',
    padding: 10,
    height: 60,
  },
  navBarTitle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
  },
});
