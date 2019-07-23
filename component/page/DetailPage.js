import React from "react";
import { Image,View } from 'react-native';
import { Container,Separator,ListItem,Row,Col, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';import AppHeader from '../layout/Header';

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
            <View style={{alignSelf:'center',margin:10}}>
                <Thumbnail large source={{uri: employee.photo}}/>
            </View>
            <View>
              <Content>
                <Separator bordered>
                  <Text>Data Diri</Text>
                </Separator>
                <ListItem>
                  <Text>{employee.name}</Text>
                </ListItem>
                <ListItem>
                  <Text>{employee.phone}</Text>
                </ListItem>
                <ListItem>
                  <Text>{employee.email}</Text>
                </ListItem>            
                <ListItem>
                  <Text>{employee.address}</Text>
                </ListItem>                                
                <Separator bordered>
                  <Text>MIDFIELD</Text>
                </Separator>
                <ListItem>
                  <Text>Caroline Aaron</Text>
                </ListItem>
                <ListItem>
                  <Text>Lee phone</Text>
                </ListItem>             
                <ListItem>
                  <Text>Lee phone</Text>
                </ListItem>                                
              </Content>
            </View>
          </Content>
        </Container>
      );
  }
}


export default DetailPage;