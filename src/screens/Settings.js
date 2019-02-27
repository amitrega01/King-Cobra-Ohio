import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Styles from '../consts/Styles';
export default class Settings extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={Styles.mainContainer}>
        <Text>Placeholder</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
