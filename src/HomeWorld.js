import React from "react";
import { Card } from "./style.js";

const HomeWorld = person => {
  const { name, birth_year, skin_color } = person;
  return (
    <Card>
      <ul>
        <li>{name}</li>
        <li>{birth_year}</li>
        <li>{skin_color}</li>
      </ul>
    </Card>
  );
};

export default HomeWorld;
