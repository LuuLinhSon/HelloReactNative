import React, { Component } from "react";
import { AppRegistry, View, Text, StyleSheet } from "react-native";

export default class ComponentB extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "red",flex:1 }}>
        <Text>ComponentB</Text>
      </View>
    );
  }
}
