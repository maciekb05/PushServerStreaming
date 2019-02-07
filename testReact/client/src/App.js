import React, { Component } from "react";
import socket from "@maciekb05/socket-lib-client";
import { Container, Segment, Header, Icon } from "semantic-ui-react";
import Advertisement from "./Advertisement";

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      endpoint: "http://127.0.0.1:4001",
      value: ''
    };
  }

  componentDidMount() {
    socket.initializeSocket(this.state.endpoint);
    socket.onEvent("message", msg => this.addMessage(msg))
  }
  addMessage(msg) {
    this.setState({
      messages: [...this.state.messages, msg]
    })
  }
  renderMessages() {
    console.log(this.state.messages)
    return this.state.messages.map(msg => {
      return <div>{msg}</div>;
    });
  }
  sendMessage(msg) {
    socket.sendEvent("message", msg);
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.sendMessage(this.state.value);
    this.setState({
      value: ''
    })
  }

  render() {
    return (

      <div style={{ textAlign: "center" }}>
        {this.renderMessages()}

        <form onSubmit={this.handleSubmit}>
        <label>
          Message:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
      </form>
        
      </div>

        // <Container className="ui container" style={{marginTop:10}}>
        //     <Container>
        //         <Segment>
        //             <Segment>
        //                 <Header as="h1"><Icon name="table"/>Tablica ogłoszeń</Header>
        //             </Segment>
        //             <Segment>
        //                 <Advertisement 
        //                     name="Kupię opla"
        //                     description="Kupie opla Corse, 2000. Taki żeby jechał i z ważnym przeglądem."
        //                     additionDate="21.04.2014"
        //                     expirationDate="31.02.2019"
        //                     author="Brajan123"
        //                     location="Kraków"
        //                 />
        //                 <Advertisement 
        //                     name="Udzielę korepetycji C++, Java, JavaScript"
        //                     description="Dla studentów pierwszego stopnia informatyki. W godzinach wieczornych. 100 zł / godzinę zegarową. Zapraszam!"
        //                     additionDate="01.11.2017"
        //                     expirationDate="13.12.2031"
        //                     author="ProgramistaABC"
        //                     location="Kraków, AGH"
        //                 />
        //             </Segment>
        //         </Segment>
        //     </Container>
        // </Container>
    );
  }
}
export default App;