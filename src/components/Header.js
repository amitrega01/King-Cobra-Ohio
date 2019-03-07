import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Strings from '../consts/Strings';
import Colors from '../consts/Colors';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>{Strings.appTitle} </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    background: Colors.mainColor,
    padding: 16
  }
});
