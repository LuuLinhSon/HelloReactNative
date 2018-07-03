import React, { Component } from "react";
import { AppRegistry, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Navigation } from "react-native-navigation";

export default class ComponentC extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'yellow', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>ComponentC</Text>
        <TouchableOpacity
          onPress={this._onPress.bind(this)}
          style={{ backgroundColor: 'red', height: 50, width: 100, borderRadius: 5 }}>
          <Text style={{ textAlign: 'center',color:'#FFF' }}>Next to Screen D</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _onPress() {
    Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: 'screenD',
            passProps: {
              text: 'stack with one child'
            },
            options: {
              topBar: {
                title: {
                  text: 'Modal'
                }
              }
            }
          }
        }]
      }
    });
  }
}
