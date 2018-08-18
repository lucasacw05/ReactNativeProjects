import React from 'react';
//import { StyleSheet,  } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MainScene from './src/components/MainScene.js';

class App extends React.Component {
  render() {
    return (
      <MainScene />
    );
  }
}

export default createStackNavigator({
  Home: {
    screen: App,
  },
});
