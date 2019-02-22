import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      info: ""
    };
  }

  handleAdd = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  handleDecrease = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };
  render() {
    return (
      <div>
        <p> {this.state.counter} </p>
        <button onClick={this.handleAdd}> add</button>
        <button onClick={this.handleDecrease}> decrease </button>
        <p>
          {this.state.counter % 3 === 0 ? "dog  " : ""}
          {this.state.counter % 5 === 0 ? "cat" : ""}
        </p>
      </div>
    );
  }
}

export default App;
