import React, { Component } from "react";
import { StatusBar, StyleSheet } from "react-native";
import { ThemeProvider, Button, Text, Card } from "react-native-elements";

export default class App extends Component {
  state = {
    numberOfPresses: 0
  };

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  onPressHandler = () => {
    this.setState(previousState => ({
      numberOfPresses: previousState.numberOfPresses + 1
    }));
  };

  render() {
    let displayText = `The button has been pressed ${this.state.numberOfPresses} time`;
    if (this.state.numberOfPresses !== 1) {
      displayText += "s";
    }
    return (
      <ThemeProvider>
        <Card title="React Native Demo App">
          <Button
            style={styles.button}
            title="Press Me!"
            onPress={this.onPressHandler}
          />
          <Text h3 style={styles.text}>
            {displayText}
          </Text>
        </Card>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginBottom: 10
  },
  text: {
    textAlign: "center"
  }
});
