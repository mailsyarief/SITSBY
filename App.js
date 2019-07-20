import React from "react";
import { FlatList } from "react-native";
import axios from 'axios';
import { Text, ListItem, Left, Body, Icon, Right, Title, Container, Content, Item, Input, List, Thumbnail, Spinner,Toast } from "native-base";
import AppHeader from './component/layout/Header';



class App extends React.Component {

  constructor() {
    super();
    this.state = {
      showToast: false,
      employees: []
    }
  }

  onPressHandler(data){
    console.log(data);
  }

  componentDidMount(){

    axios.get('http://10.0.2.2:2000/sitsby/list.json')
      .then(res => {
        const resData = res.data.data;
        // console.log(resData);
        this.setState({employees:resData});
    })

    if(this.state.employees.length > 0){
      return data = this.state.employees.map((employee) =>
        <ListItem avatar key={employee.id} onPress={() => this.onPressHandler(employee.name)}>
          <Left>
            <Thumbnail source={{ uri: 'https://mhcd.org/wp-content/uploads/2017/12/placeholder-man.png' }} />
          </Left>
          <Body>
            <Text>{employee.name}</Text>
            <Text note>{employee.email}</Text>
          </Body>
        </ListItem>
      );
    }else{
      return(
          <Spinner color='blue' style={{marginTop:100}}/>
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