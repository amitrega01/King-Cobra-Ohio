import { AsyncStorage } from 'react-native';

const initialState = {
  interval: 7200000,
  darkMode: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE': {
      return {
        url: state.url,
        interval: state.interval,
        darkMode: state.darkMode,
        lastUpdate: state.lastUpdate,
        channels: state.channels.map(channel =>
          channel.id === action.id
            ? { ...channel, isActive: true }
            : { ...channel, isActive: false }
        ),
        active: state.channels.filter(item => item.id == action.id).news
      };

      break;
    }
    case 'UPDATE': {
      var tmpState = {
        lastUpdate: action.lastUpdate,
        url: action.url,
        channels: action.rss,
        active: action.active,
        interval: state.interval,
        darkMode: state.darkMode
      };
      saveStateToStorage(tmpState);
      return tmpState;
      break;
    }
    case 'SET_INTERVAL': {
      var temp = state;
      console.log('NEW INTERVAL');
      console.log(action.newInterval);
      temp.interval = action.newInterval;
      saveStateToStorage(temp);
      return temp;
    }

    case 'TOOGLE_DARKMODE': {
      var temp = state;
      temp.darkMode = action.darkMode;
      saveStateToStorage(temp);
      return temp;
    }
    case 'GET_STATE_FROM_STORAGE': {
      return action.localState;
      break;
    }
    default:
      return state;
  }
};

function saveStateToStorage(state) {
  console.log('saveStateToStorage()');
  console.log(state);
  var json = JSON.stringify(state);
  console.log(json);
  AsyncStorage.setItem('STATE1', json);
  return state;
}
