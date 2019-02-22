import React, { Component } from "react";
import * as actions from "../../actions";
import "./index.css";

class MyList extends Component {
  //   componentDidMount() {
  //     this.props.getList();
  //   }

  // onClickRemoveButton = id => {
  //   this.props.deleteItems(id);
  // };
  // onClickAddButton = (id) =>{
  //     this.props.addrecommend(id);
  // }

  render() {
    var t = this.props;
    console.log(t);
    return (
      <div style={{ display: "flex" }}>
        {this.props.myList &&
          this.props.myList.map(ele => {
            return (
              <div className="item">
                <ul>
                  <p>{ele.title}</p>
                  <img
                    tittle={ele.title}
                    height={100}
                    src={ele.img}
                    alt={ele.id}
                  />
                  <button onClick={() => this.props.deleteItems(ele.id)}>
                    remove
                  </button>
                </ul>
              </div>
            );
          })}
      </div>
    );
  }
}

export default MyList;
