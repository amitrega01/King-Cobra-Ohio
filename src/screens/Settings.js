import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Styles from '../consts/Styles';
export default class Settings extends Component {
  static navigationOptions = {
    header: null
    
  };
  render() {
    this.state = {darkMode: false}
    return (
      <View style={{flexdirection: 'row'}}>
        <View>
          <Text>Dark mode</Text>
          <CheckBox 
          value={this.state.darkMode} 
          onValueChange={(value) => this.setState({darkMode: value})} 
          />
        </View>
      </View>
    );
  }
}


