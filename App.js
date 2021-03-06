import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Route, Switch } from 'react-router-native';

import Home from './src/components/Home.js';
import Topic from './src/components/Topic.js';

import history from './src/utils/history.js'

export default class App extends React.Component {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/topic" component={Topic}/>
        </Switch>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  insideContainer: {
    backgroundColor: '#000'
  },
  insideText: {
    color: '#fff'
  }
});
