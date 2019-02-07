import React, { Component } from "react";
import socket from "@maciekb05/socket-lib-client";
import {Container, Segment, Header, Icon, Divider, Grid, GridColumn, Card} from "semantic-ui-react";
import Advertisement from "./Advertisement";
import AddAdvertisement from "./AddAdvertisement";

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
          advertisements: [],
          endpoint: "http://127.0.0.1:4001",
          value: ''
      };
    }

  componentDidMount() {
    socket.initializeSocket(this.state.endpoint);
    socket.onEvent("advertisement", data => this.addAdvertisement(data))
  }

  addAdvertisement(data) {
      console.log(data);
    this.setState({
      advertisements: [...this.state.advertisements, data]
    })
  }
  renderAdvertisements() {
    return this.state.advertisements.map(data => {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1;
      var yyyy = today.getFullYear();
      console.log(dd);
      console.log(mm);
      console.log(yyyy);
      console.log(data.duration);

      if(dd<10) {
          dd = '0'+dd
      }
      if(mm<10) {
          mm = '0'+mm
      }
      var addDate = dd + '/' + mm + '/' + yyyy;
      var expDate = today;
      expDate.setDate(today.getDate() + parseInt(data.duration));
      dd = expDate.getDate();
      mm = expDate.getMonth()+1;
      yyyy = expDate.getFullYear();
      if(dd<10) {
          dd = '0'+dd
      }
      if(mm<10) {
          mm = '0'+mm
      }
      expDate = dd + '/' + mm + '/' + yyyy;
      return <Advertisement
            description={data.description}
            expirationDate={expDate}
            author={data.author}
            email={data.email}
            location={data.location}
            phone={data.phone}
            additionDate={addDate}
            duration={data.duration}
            />;
    });
  }
    createAdvertisement = (data) => {
      socket.sendEvent("advertisement", data);
    };

  render() {
    console.log(this.state);
    return (
        <Container className="ui container" style={{marginTop:10}}>
            <Container>
                <Segment>
                    <Segment>
                        <Grid>
                            <GridColumn width={14}>
                                <Header as="h1">
                                    <Icon name="table"/>
                                    Tablica ogłoszeń
                                </Header>
                            </GridColumn>
                            <GridColumn width={2}>
                                <AddAdvertisement style={{textAlign:"center"}} createAdvertisement={(data) => this.createAdvertisement(data)} />
                            </GridColumn>
                        </Grid>
                    </Segment>
                    <Segment>
                        <Advertisement
                            name="Kupię opla"
                            description="Kupie opla Corse, 2000. Taki żeby jechał i z ważnym przeglądem."
                            additionDate="21.04.2014"
                            expirationDate="31.02.2019"
                            author="Brajan123"
                            phone="519222333"
                            email="asd@qwe.pl"
                            location="Kraków"
                        />
                        <Advertisement
                            name="Udzielę korepetycji C++, Java, JavaScript"
                            description="Dla cycatych studentek pierwszego stopnia informatyki. W godzinach wieczornych ^^ . 100 zł / godzinę zegarową. Zapraszam!"
                            additionDate="01.11.2017"
                            expirationDate="13.12.2031"
                            author="ProgramistaABC"
                            phone="111222333"
                            email="aaa@bbb.ccc"
                            location="Kraków, AGH"
                        />
                        {this.renderAdvertisements()}
                    </Segment>
                </Segment>
            </Container>
        </Container>
    );
  }
}
export default App;