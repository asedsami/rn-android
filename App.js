// App.js
import React, { Component } from 'react';
import HomeScreenRouter from './HomeScreen';
import { Text, StyleSheet } from 'react-native';
import Expo from 'expo';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('native-base/Fonts/Ionicons.ttf')
    });
    this.setState({isReady: true});
  }

  render() {
    if(!this.state.isReady) {
      return <Text>Loading...</Text>;
    }

    return (
      <HomeScreenRouter style={styles.root}/>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    marginTop: Expo.Constants.statusBarHeight,
  }
});
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
