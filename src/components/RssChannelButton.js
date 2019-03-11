import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class RssChannelButton extends Component {
  render() {
    return (
      //TODO: wariant aktywny i nie aktywny
      <TouchableOpacity
        onPress={() => {
          this.props.dispatch({
            type: 'SET_ACTIVE',
            id: this.props.id
          });
        }}
      >
        <Text>
          {this.props.name}-{this.props.isActive ? 'T' : 'N'}
        </Text>
      </TouchableOpacity>
    );
  }
}
const mapStateToProps = state => ({
  channels: state.channels
});
export default connect(mapStateToProps)(RssChannelButton);
const styles = StyleSheet.create({});
