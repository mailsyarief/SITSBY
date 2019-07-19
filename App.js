import React from "react";
import { FlatList } from "react-native";
import axios from 'axios';
import { Text, ListItem, Left, Body, Icon, Right, Title, Container, Content, Item, Input, List, Thumbnail, Spinner } from "native-base";
import AppHeader from './component/layout/Header';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      employees: []
    }
  }

  componentDidMount(){

    axios.get('http://7ea838cf.ngrok.io/sitsby/list.json')
      .then(res => {
        const resData = res.data.data;
        // console.log(resData);
        this.setState({employees:resData});
    })

    if(this.state.employees.length > 0){
      return data = this.state.employees.map((employee) =>
        <ListItem avatar key={employee.id}>
          <Left>
            <Thumbnail source={{ uri: 'https://mhcd.org/wp-content/uploads/2017/12/placeholder-man.png' }} />
          </Left>
          <Body>
            <Text>{employee.name}</Text>
            <Text note>{employee.phone}</Text>
          </Body>
        </ListItem>

      );
    }else{
      return(
          <Spinner color='blue' style={{margin:100}}/>
      )
    }
  }

  render() {
    const listdata = this.componentDidMount();
    return (
      <Container>
        <AppHeader/>
          <Content>
              <List>
                {listdata}
              </List>  
          </Content>        
      </Container>
    );
  }
}

export default App;