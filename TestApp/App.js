import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {

  state = {
    placeName: "",
    places: []
  };

  placeNameChangedHandler = value => {
    this.setState({
      placeName: value
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };

  render() {

    const placesOutput = this.state.places.map(place => (
      <Text>{place}</Text>
    ));

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          value={this.state.placeName}
          placeholder="An awesome place"
          onChangeText={this.placeNameChangedHandler}
        />
        <Button
          style={styles.placeButton}
          title="add"
          onPress={this.placeSubmitHandler}
        />
        </View>
        <View>{placesOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  placeInput: {
    width: "70%"
  },

  placeButton: {
    width: "30%"
  }

});
