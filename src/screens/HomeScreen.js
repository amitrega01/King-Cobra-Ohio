import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Strings from '../consts/Strings';
import Styles from '../consts/Styles';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={Styles.mainContainer}>
        <Text> {Strings.appTitle} asdasd</Text>
      </View>
    );
  }
}
