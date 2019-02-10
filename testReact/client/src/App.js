import React, { Component } from "react";
import socket from "@maciekb05/socket-lib-client";
import {Container, Segment, Header, Icon, Grid, GridColumn} from "semantic-ui-react";
import Advertisement from "./Advertisement";
import AddAdvertisement from "./AddAdvertisement";

class App extends Component {

    state = {
        advertisements: [],
        endpoint: "http://127.0.0.1:4001"
    }

    componentDidMount() {
        socket.initializeSocket(this.state.endpoint);
        socket.onEvent("advertisement", data => this.addAdvertisement(data));
    }

    addAdvertisement(data) {
        this.setState({
            advertisements: [...this.state.advertisements, data]
        });
    }

    renderAdvertisements() {
        return this.state.advertisements.map(advertisement => {
            return (
                <Advertisement
                    description = {advertisement.description}
                    expirationDate = {advertisement.expirationDate}
                    username = {advertisement.username}
                    email = {advertisement.email}
                    location = {advertisement.location}
                    phone = {advertisement.phone}
                    additionDate = {advertisement.additionDate}
                    duration = {advertisement.duration}
                    subject = {advertisement.subject}
                />
            );
        });
    }
    
    createAdvertisement = (data) => {
        socket.sendEvent("advertisement", data);
    }

    render() {
        return (
            <Container className="ui container" style={{marginTop:10}}>
                <Container>
                    <Segment>
                        <Segment>
                            <Grid>
                                <GridColumn width={14}>
                                    <Header as="h1">
                                        <Icon name="table" />
                                        Tablica ogłoszeń
                                    </Header>
                                </GridColumn>
                                <GridColumn width={2}>
                                    <AddAdvertisement 
                                        style={{textAlign:"center"}} 
                                        createAdvertisement={(data) => this.createAdvertisement(data)} 
                                    />
                                </GridColumn>
                            </Grid>
                        </Segment>
                        <Segment>
                            <Advertisement
                                subject="Kupię opla"
                                description="Kupie opla Corse, 2000. Taki żeby jechał i z ważnym przeglądem."
                                additionDate="21/04/2014"
                                expirationDate="31/02/2019"
                                username="Brajan123"
                                phone="519222333"
                                email="asd@qwe.pl"
                                location="Kraków"
                            />
                            <Advertisement
                                subject="Udzielę korepetycji C++, Java, JavaScript"
                                description="Dla pierwszego stopnia informatyki. 100 zł / godzinę zegarową. Zapraszam!"
                                additionDate="01/11/2017"
                                expirationDate="13/12/2031"
                                username="ProgramistaABC"
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