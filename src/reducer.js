const initialState = {
  channels: [
    {
      id: 1,
      url: 'url',
      name: 'KANAL1',
      active: true
    },
    {
      id: 2,
      url: 'url',
      name: 'KANAL2',
      active: false
    },
    {
      id: 3,
      url: 'url',
      name: 'KANAL3',
      active: false
    },
    {
      id: 4,
      url: 'url',
      name: 'KANAL4',
      active: false
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE': {
      return state.channels.map(channel =>
        channel.id == action.id
          ? (channel.active = true)
          : (channel.active = false)
      );
      break;
    }
    default:
      return state;
  }
};
