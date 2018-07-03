import React, { Component } from "react";
import "./Favorites.css";

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      Favorites: ""
    };
  }
  render() {
    `x`;
    return (
      <div>
        <h5 className="favoritesName">{this.props.name}</h5>
        <h5 className="favoritesPrice">{this.props.price}</h5>
      </div>
    );
  }
}

export default Favorites;
