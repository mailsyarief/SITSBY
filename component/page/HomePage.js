import React from "react";
import axios from 'axios';
import { Text, ListItem, Left, Body,Button, Icon, Right, Title, Container, Content, Item, Input, List, Thumbnail, Spinner,Toast } from "native-base";

class HomePage extends React.Component {

    static navigationOptions = {
        headerTitle: "SITSBY",
    };

  constructor() {
    super();
    this.state = {
      showToast: false,
      employees: []
    }
  }

  onPressHandler(data){
    console.log(data);
    console.warn(data.name);
    this.props.navigation.navigate('DetailPage',{employee:data});
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
        <ListItem avatar key={employee.id} onPress={() => this.onPressHandler(employee)}>
          <Left>
            <Thumbnail source={{ uri: employee.photo }} />
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
          <Content>
              <List>
                {listdata}
              </List>  
          </Content>        
      </Container>
    );
  }
}

export default HomePage;