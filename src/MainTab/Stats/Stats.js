import React, { Component } from 'react';
import { Container, Header, StyleProvider, Title, Accordion, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Badge, H1, H2, H3, Item, Input, Icon} from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet " }
];

export default class Stats extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>


          <Header>
            <Body>
              <Title>Stats</Title>
            </Body>
          </Header>


          <Content searchBar padder>

            <Item>
              <Icon name="search" />
              <Input placeholder="Search" />
            </Item>

            <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
          </Content>

        </Container>
      </StyleProvider>
      
    );
  }
}

