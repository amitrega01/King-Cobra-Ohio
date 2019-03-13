import rssFetch from './utils/rssFetch';
import { AsyncStorage } from 'react-native';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE': {
      return {
        url: state.url,
        channels: state.channels.map(channel =>
          channel.id === action.id
            ? { ...channel, isActive: true }
            : { ...channel, isActive: false }
        )
      };

      break;
    }
    case 'UPDATE': {
      var tmpState = {
        url: action.url,
        channels: action.rss
      };
      saveStateToStorage(tmpState);
      return tmpState;
      break;
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
