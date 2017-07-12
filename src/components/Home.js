import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header.js'
import Footer from './Footer.js'

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Home"/>
        <Text>Hello, I'm a home page!</Text>
        <Footer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
