import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: " "
    };
  }

  componentDidMount() {
    this.timeClock = setInterval(this.clock, 1000);
  }

  clock = () => {
    var d = new Date();
    var n = d.toLocaleTimeString();
    this.setState({ timer: n });
  };

  // cancel or clear the timeclock
  componentWillUnmount() {
    clearInterval(this.timeClock);
  }
  render() {
    return (
      <div className="App">
        <div>{this.state.timer}</div>
      </div>
    );
  }
}

export default App;
