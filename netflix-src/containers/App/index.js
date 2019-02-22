import React, { Component } from "react";
import { connect } from "react-redux";
import MyList from "../../components/MyList";
import Recommendations from "../../components/Recommendations";
import { getList, deleteItems, addItems } from "../../actions/index";

class App extends Component {
  render() {
    var t = this.props;
    console.log(t);
    return (
      <div>
        <h> mylist</h>
        <MyList
          myList={this.props.mylist}
          deleteItems={this.props.deleteItems}
        />

        <h> recommendations</h>
        <Recommendations
          recommendations={this.props.recommendations}
          addItems={this.props.addItems}
        />
        {/* <h>myList:</h>
        {this.props.mylist.map(ele => {
          return <div>{ele.title}</div>;
        })} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mylist: state.lists.mylist,
    recommendations: state.lists.recommendations
  };
};

export default connect(
  mapStateToProps,
  { getList, deleteItems, addItems }
)(App);
