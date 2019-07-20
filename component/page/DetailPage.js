import React from "react";
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';import AppHeader from '../layout/Header';

class DetailPage extends React.Component {

    static navigationOptions = {
        headerTitle: "Detail Pegawai",
    };

  render() {
    const employee = this.props.navigation.state.params.employee;
    const uri = employee.photo;
    return (
        <Container>
          <Content>
            <Card style={{flex: 0}}>
              <CardItem>
                <Body>
                  <Thumbnail large source={{uri: employee.photo}} />
                  <Text>{employee.name}</Text>
                  <Text>{employee.email}</Text>
                </Body>
              </CardItem>
            </Card>
          </Content>
        </Container>
      );
  }
}

export default DetailPage;