import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  CheckBox,
  TouchableOpacity
} from 'react-native';
import Styles from '../consts/Styles';
export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = { darkMode: false };
  }

  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            padding: 16,
            justifyContent: 'space-between'
          }}
        >
          <Text>Dark mode</Text>
          <CheckBox
            value={this.state.darkMode}
            onValueChange={value => this.setState({ darkMode: value })}
          />
        </View>
      </View>
    );
  }
}
