import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
class AppHeader extends Component {
  render() {
    return (
        <Header>
          <Body>
            <Title style={{marginLeft:16}} >SITSBY</Title>
          </Body>
          <Right>
            <Button transparent style={{marginRight:10}}>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>   
    );
  }
}

export default AppHeader;