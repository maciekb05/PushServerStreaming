import React, { Component } from "react";
import { Segment, Header, Grid, Divider, GridColumn, Label, Card } from "semantic-ui-react";
import AddAdvertisement from "./AddAdvertisement";

class Advertisement extends Component {
    render() {
        return (
            <Segment>
                <div>
                    <Header as="h3" style={{textAlign:"center"}}>{this.props.subject}</Header>
                </div>
                
                <Divider/>
                <Grid>
                    <GridColumn width={8}>
                        {this.props.description}
                    </GridColumn>
                    <GridColumn width={4}>
                        <Card
                            header="Data dodania"
                            description={this.props.additionDate}
                        />
                        <Card
                            header="Data wygaśnięcia"
                            description={this.props.expirationDate}
                        />
                        <Card
                            header="Email"
                            description={this.props.email}
                        />
                    </GridColumn>
                    <GridColumn width={4}>
                        <Card
                            header="Dodano przez"
                            description={this.props.username}
                        />
                        <Card
                            header="Lokalizacja"
                            description={this.props.location}
                        />
                        <Card
                            header="Numer telefonu"
                            description={this.props.phone}
                        />
                    </GridColumn>
                </Grid>
            </Segment>
        );
    }
}

export default Advertisement;