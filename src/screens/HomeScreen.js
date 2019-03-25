import React, { Component } from 'react';
import { Text, AsyncStorage, View } from 'react-native';
import Strings from '../consts/Strings';
import Styles from '../consts/Styles';
import { connect } from 'react-redux';
import Header from '../components/Header';
import rssFetch from '../utils/rssFetch';
import { NewsList } from '../containers/NewsList';
import Colors from '../consts/Colors';
import * as Progress from 'react-native-progress';

let list = (
  <Progress.Circle
    size={30}
    indeterminate={true}
    color={Colors.mainColor}
    style={{ felx: 1 }}
  />
);

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      news: []
    };
  }
  async updateState() {
    await rssFetch(Strings.mainUrl).then(rss => {
      var active = rss.find(item => item.isActive == true).news;
      console.log('ACTIVE');
      console.table(active);
      this.props.dispatch({
        type: 'UPDATE',
        lastUpdate: Date.now(),
        url: Strings.mainUrl,
        rss: rss,
        active: active
      });
      list = <NewsList news={active} />;
      this.setState({
        loaded: true
      });
    });
  }
  async checkLastUpdate(localState) {
    //7200000 = 2h
    if (localState.lastUpdate + Strings.updateInterval > Date.now())
      console.log('nie trzeba updtejtowac');
    else {
      console.log('Wymagany updejt');
      await this.updateState();
    }
  }
  async componentWillMount() {
    console.log('FIRST RUN');
    await AsyncStorage.getItem('STATE1').then(async localStateJSON => {
      var localState = JSON.parse(localStateJSON);
      console.log(localState);
      if (localState == null) {
        console.log('NIE MA W PAMIECI KANALOW');
        this.updateState();
      } else {
        console.log('SA W PAMIECI');
        this.props.dispatch({
          type: 'GET_STATE_FROM_STORAGE',
          localState: localState
        });
        list = (
          <NewsList
            news={this.props.channels.find(x => x.isActive == true).news}
          />
        );
        await this.checkLastUpdate(localState).then(() => {
          this.setState({
            loaded: true
          });
        });
      }
    });
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={Styles.mainContainer}>
        <Header
          callback={id => {
            console.log('CALBBACk' + id);
            let active = this.props.channels.find(item => item.id == id).news;
            list = <NewsList news={active} />;
            console.log(active);
          }}
          channels={this.props.channels}
          onPress={() => navigate('Settings')}
        />
        <Text>{this.state.active}</Text>
        {list}
      </View>
    );
  }
}
const mapStateToProps = state => ({
  url: state.url,
  channels: state.channels,
  active: state.active
});

export default connect(mapStateToProps)(HomeScreen);
