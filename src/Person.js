import React from "react";
import { Card, Unordered } from "./style.js";

const Person = ({ name, birth_year, skin_color }) => (
  <Card>
    <Unordered>
      <li>{name}</li>
      <li>{birth_year}</li>
      <li>{skin_color}</li>
    </Unordered>
  </Card>
);

export default Person;
