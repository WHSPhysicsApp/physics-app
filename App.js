import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from 'src/components/Home.js';

export default class App extends React.Component {
  render() {
    return (
      <Home/>
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
    backgroundColor: '#000',
    alignItems: 'left'
  },
  insideText: {
    color: '#fff'
  }
});
