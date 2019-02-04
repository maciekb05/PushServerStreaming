import React, { Component } from "react";
import socketIOClient from "socket.io-client";
class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      endpoint: "http://127.0.0.1:4001",
      value: ''
    };
  }

  socket= {};

  componentDidMount() {
    const { endpoint } = this.state;
    this.socket = socketIOClient(endpoint);
    this.socket.on("message", msg => this.addMessage(msg));
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
    this.socket.emit('message', msg);
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
    const { response } = this.state;
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
    );
  }
}
export default App;