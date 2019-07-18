import React from "react";
import { FlatList } from "react-native";
import { Text, ListItem, Left, Body, Icon, Right, Title, Container, Content, Item, Input, List, Thumbnail } from "native-base";
import AppHeader from './component/layout/Header';
class App extends React.Component {

  constructor() {
    super();
    this.state = [
      {name:'nama 1',phone:'08123123'},
      {name:'nama 1',phone:'08123123'},
      {name:'nama 1',phone:'08123123'},
      {name:'nama 1',phone:'08123123'},
      {name:'nama 1',phone:'08123123'},
      {name:'nama 1',phone:'08123123'},
      {name:'nama 1',phone:'08123123'},
      {name:'nama 1',phone:'08123123'},
      {name:'nama 1',phone:'08123123'},
      {name:'nama 1',phone:'08123123'},
      {name:'nama 1',phone:'08123123'},
      {name:'nama 1',phone:'08123123'},
      {name:'nama 1',phone:'08123123'},
      {name:'nama 1',phone:'08123123'},
      {name:'nama 1',phone:'08123123'},
      {name:'nama 1',phone:'08123123'},

    ]

  }


  componentDidMount(){
    return data = this.state.map((data) =>
      <ListItem avatar>
        <Left>
          <Thumbnail source={{ uri: 'https://mhcd.org/wp-content/uploads/2017/12/placeholder-man.png' }} />
        </Left>
        <Body>
          <Text>{data.name}</Text>
          <Text note>{data.phone}</Text>
        </Body>
        <Right>
          <Text note>3:43 pm</Text>
        </Right>
      </ListItem>
    );
  }




  render() {
    const listdata = this.componentDidMount();
    return (
      <Container>
        <AppHeader/>
          <Item regular style={{margin:10}}>
            <Input placeholder='Search By Name'/>
          </Item>
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