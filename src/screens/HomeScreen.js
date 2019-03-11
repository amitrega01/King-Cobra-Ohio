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
  componentWillMount = () => {
    this.firstRun();
  };
  firstRun = () => {
    if (!this.props.url) {
      this.props.dispatch({
        type: 'FIRST_RUN',
        url: Strings.mainUrl
      });
    }
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={Styles.mainContainer}>
        <Header onPress={() => navigate('Settings')} />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  url: state.url
});

export default connect(mapStateToProps)(HomeScreen);
