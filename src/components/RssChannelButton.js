import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class RssChannelButton extends Component {
  render() {
    if (this.props.isActive) {
      return (
        //TODO: wariant aktywny i nie aktywny
        <TouchableOpacity style={styles.active}>
          <Text style={styles.activeText}>{this.props.fullName}</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.inActive}
          onPress={() => {
            this.props.dispatch({
              type: 'SET_ACTIVE',
              id: this.props.id
            });
            this.props.callback(this.props.id);
          }}
        >
          <Text style={styles.inActiveText}>{this.props.name}</Text>
        </TouchableOpacity>
      );
    }
  }
}
const mapStateToProps = state => ({
  channels: state.channels
});
export default connect(mapStateToProps)(RssChannelButton);
const styles = StyleSheet.create({
  active: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 16
  },
  activeText: {
    color: 'rgba(0,0,0,0.75)',
    fontWeight: 'bold'
  },
  inActive: {
    paddingHorizontal: 16,
    paddingVertical: 4
  },
  inActiveText: {
    color: '#fff'
  }
});
