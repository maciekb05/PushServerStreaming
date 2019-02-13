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
        socket.onEvent("history", (history) => this.addHistoryToState(history));
    }

    addAdvertisement(data) {
        this.setState({
            advertisements: [...this.state.advertisements, data]
        });
    }

    addHistoryToState(history) {
        console.log("hiostia")
        console.log(history);
        if ( history ) {
            this.setState({
                advertisements: this.state.advertisements.concat(history)
            });
        }
    }

    renderAdvertisements() {
        console.log(this.state.advertisements)
        return this.state.advertisements ? this.state.advertisements.map(advertisement => {
            return (
                <Advertisement
                    key = {advertisement.description + advertisement.additiondate}
                    description = {advertisement.description}
                    expirationDate = {advertisement.expirationdate}
                    username = {advertisement.username}
                    email = {advertisement.email}
                    location = {advertisement.location}
                    phone = {advertisement.phone}
                    additionDate = {advertisement.additiondate}
                    duration = {advertisement.duration}
                    subject = {advertisement.subject}
                />
            );
        }) : null;
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
                            {this.renderAdvertisements()}
                        </Segment>
                    </Segment>
                </Container>
            </Container>
        );
    }

}
export default App;