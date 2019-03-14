import React, { Component } from 'react';
import { Text, AsyncStorage, View } from 'react-native';
import Strings from '../consts/Strings';
import Styles from '../consts/Styles';
import { connect } from 'react-redux';
import Header from '../components/Header';
import rssFetch from '../utils/rssFetch';

const cheerio = require('cheerio-without-node-native');
class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    console.log('FIRST RUN');
    var localStateJSON = await AsyncStorage.getItem('STATE1');
    var localState = JSON.parse(localStateJSON);
    console.log(localState);
    if (localState == null) {
      console.log('NIE MA W PAMIECI KANALOW');
      var rss = await rssFetch(Strings.mainUrl);
      for (let index = 0; index < rss.length; index++) {
        rss[index] = {
          id: index,
          name: 'KANAL' + (index + 1),
          url: rss[index],
          isActive: index == 0 ? true : false
        };
      }
      this.props.dispatch({ type: 'UPDATE', url: Strings.mainUrl, rss: rss });
    } else {
      console.log('SA W PAMIECI ');
      this.props.dispatch({
        type: 'GET_STATE_FROM_STORAGE',
        localState: localState
      });
    }
  }

  firstRun = () => {};
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
  url: state.url,
  channels: state.channels
});

export default connect(mapStateToProps)(HomeScreen);
