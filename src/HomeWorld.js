import React from "react";
import { Card } from "./style.js";

const HomeWorld = ({ name }) => (
  <Card>
    <ul>
      <li>{name}</li>
      {/* <li>{birth_year}</li>
        <li>{skin_color}</li> */}
    </ul>
  </Card>
);

export default HomeWorld;
