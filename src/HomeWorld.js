import React, { Component } from "react";
import { Card } from "./style.js";

export default class HomeWorld extends Component {
  render() {
    const { name, birth_year, skin_color } = this.props.selectedPerson;
    return (
      <Card>
        <ul>
          <li>{name}</li>
          <li>{birth_year}</li>
          <li>{skin_color}</li>
        </ul>
      </Card>
    );
  }
}
