import React, { Component } from 'react';
import { ActivityIndicator, AsyncStorage, View } from 'react-native';
import Strings from '../consts/Strings';
import Styles from '../consts/Styles';
import { connect } from 'react-redux';
import Header from '../components/Header';
import rssFetch from '../utils/rssFetch';
import { NewsList } from '../containers/NewsList';
import { BackgroundFetch, TaskManager } from 'expo';
import Colors from '../consts/Colors';

let list = null;

const TASK_NAME = 'background-fetch';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      progress: 0.0,
      loaded: false,
      news: []
    };

    list = (
      <ActivityIndicator
        style={{ flex: 1 }}
        size="large"
        color={Colors.mainColor}
      />
    );
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
    console.info('Hello');
    console.log(localState.interval * 1);
    if (localState.lastUpdate + localState.interval * 1 > Date.now()) {
      console.log('nie trzeba updtejtowac');
    } else {
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

    await BackgroundFetch.registerTaskAsync(TASK_NAME);
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
        {list}
      </View>
    );
  }
}

TaskManager.defineTask(TASK_NAME, () => {
  try {
    console.log('RECIVING DATA');
    const receivedNewData = 'Asd';
    return receivedNewData
      ? BackgroundFetch.Result.NewData
      : BackgroundFetch.Result.NoData;
  } catch (error) {
    console.log(error.message);
    return BackgroundFetch.Result.Failed;
  }
});

const mapStateToProps = state => ({
  state: state,
  url: state.url,
  channels: state.channels,
  active: state.active,
  interval: state.interval
});

export default connect(mapStateToProps)(HomeScreen);
