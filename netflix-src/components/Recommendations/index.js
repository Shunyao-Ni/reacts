import React, { Component } from "react";

class Recommendations extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        {this.props.recommendations &&
          this.props.recommendations.map(ele => {
            return (
              <ul>
                <p> {ele.title}</p>
                <img
                  tittle={ele.title}
                  height={100}
                  src={ele.img}
                  alt={ele.id}
                />
                <button onClick={() => this.props.addItems(ele.id)}>add</button>
              </ul>
            );
          })}
      </div>
    );
  }
}

export default Recommendations;
