import { addListener } from 'cluster';

const initialState = {
  channels: [
    {
      url: 'url',
      name: 'KANAL1',
      active: true
    },
    {
      url: 'url',
      name: 'KANAL2',
      active: false
    },
    {
      url: 'url',
      name: 'KANAL3',
      active: false
    },
    {
      url: 'url',
      name: 'KANAL4',
      active: false
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
