// HomeScreen/HomeScreen.js
import React, {Component} from 'react';
import { Header, Left, Button, Body, Icon, Title } from 'native-base';
import { Text } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button
            transparent
            onPress={()=> this.props.navigation.navigate('DrawerOpen')}
          >
            <Icon name='menu' />
          </Button>
        </Left> 
        <Body>
          <Title>خانه</Title>
        </Body>
      </Header>
    );
  }
}


