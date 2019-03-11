import rssFetch from './utils/rssFetch';

const initialState = {
  url: '',
  channels: [
    {
      id: 1,
      url: 'asd',
      name: 'KANAL1',
      isActive: true
    },
    {
      id: 2,
      url: 'asd',
      name: 'KANAL2',
      isActive: false
    },
    {
      id: 3,
      url: 'asd',
      name: 'KANAL3',
      isActive: false
    }
  ]
};

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
    case 'FIRST_RUN': {
      state.url = action.url;

      return state;
      break;
    }
    default:
      return state;
  }
};
