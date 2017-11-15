// /HomeScreen/index.js
import React, {Component} from 'react';
import { DrawerNavigator } from 'react-navigation';
import { Text } from 'react-native';
import HomeScreen from './HomeScreen.js';

class SideBar extends Component {
  render() {
    return (<Text>Sidebar here</Text>);
  }
}

const HomeScreenRouter = DrawerNavigator(
  {
    'خانه': {screen: HomeScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />   
  }
);

export default HomeScreenRouter;
