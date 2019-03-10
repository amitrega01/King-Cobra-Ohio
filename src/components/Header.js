import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Strings from '../consts/Strings';
import Colors from '../consts/Colors';
import { Ionicons } from '@expo/vector-icons';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.appTitleText}>{Strings.appTitle}</Text>
        <TouchableOpacity onPress={this.props.onPress}>
          <Ionicons name="md-settings" size={32} color="white" />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.mainColor,
    padding: 16,
    paddingTop: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  appTitleText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
    letterSpacing: 5
  }
});
