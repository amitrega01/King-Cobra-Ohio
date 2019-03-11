import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Strings from '../consts/Strings';
import Styles from '../consts/Styles';
import { connect } from 'react-redux';
import Header from '../components/Header';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={Styles.mainContainer}>
        <Header
          channels={this.props.channels}
          onPress={() => navigate('Settings')}
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  url: state.url ? state.url : Strings.mainUrl,
  channels: state.channels
});

export default connect(mapStateToProps)(HomeScreen);
