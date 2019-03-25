import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default class NewRSSButton extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.wrapper}
          onPress={this.props.onPress}
          title="+"
          color="#841784"
        >
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 8
  }
});
