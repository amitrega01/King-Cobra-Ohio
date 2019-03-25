import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class NewRSSButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        title="+"
        color="#841784"
        style={{ paddingHorizontal: 8 }}
      >
        <Ionicons name="md-add" size={32} color="white" />
      </TouchableOpacity>
    );
  }
}
