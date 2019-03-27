import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducer';
import Settings from './src/screens/Settings';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: Settings }
});
const AppContainer = createAppContainer(MainNavigator);
const store = createStore(reducer);
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
export default App;
