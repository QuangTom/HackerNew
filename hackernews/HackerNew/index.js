
import React, {Component} from "react";
import Navigation from './src/Navigation/Navigation';

import store from './store';
import { Provider } from 'react-redux';

import { AppRegistry } from "react-native";

class App extends Component {
    render() {
      return (
        <Provider store={store}>
            <Navigation />
        </Provider>
      );
    }
  }
  export default App;



AppRegistry.registerComponent("HackerNews1", () => App);