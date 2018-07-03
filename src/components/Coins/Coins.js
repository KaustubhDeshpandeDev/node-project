import React, { Component } from "react";
import "./Coins.css";
import Button from "../button";

class Coins extends Component {
  constructor() {
    super();
    this.state = {
      editing: false,
      userInput: "",
      editingtwo: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickDel = this.handleClickDel.bind(this);
  }
  handleClick() {
    this.props.updateName(this.state.userInput, this.props.id);
    this.setState({ editing: false });
  }
  handleClickDel() {
    console.log(this.props.id);
    this.props.deleteName(this.props.id);
    this.setState({ editing: false });
  }
  //might want to change editiing to editingTwo

  handleChange(e) {
    this.setState({ userInput: e.target.value });
  }
  render() {
    if (this.state.editing === true) {
      return (
        <div>
          <input value={this.state.userInput} onChange={this.handleChange} />
          <button onClick={this.handleClick}>ChangeName</button>
          <button onClick={this.handleClickDel}>DeleteName</button>
          <h4>{this.props.price}</h4>
        </div>
      );
    }

    return (
      <div>
        <h2 onClick={() => this.setState({ editing: true })}>
          {this.props.name}
        </h2>
        <h4>{this.props.price}</h4>
        <Button
          handleClick={this.props.handleClick}
          element={this.props.element}
        />
      </div>
    );
  }
}

export default Coins;
