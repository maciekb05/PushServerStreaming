import React, { Component } from "react";
import { Segment, Header, Grid, Divider, GridColumn, Label, Card } from "semantic-ui-react";

class Advertisement extends Component {
    render() {
        return (
            <Segment>
                <div>
                    <Header as="h3" style={{textAlign:"center"}}>{this.props.name}</Header>
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
                    </GridColumn>
                    <GridColumn width={4}>
                        <Card
                            header="Dodano przez"
                            description={this.props.author}
                        />
                        <Card
                            header="Lokalizacja"
                            description={this.props.location}
                        />
                    </GridColumn>
                </Grid>
                
                
            </Segment>
        );
    }
}

export default Advertisement;