import React from "react";

import { Card } from "./style.js";

function Films({ films }) {
  console.log(films);
  return (
    <Card>
      <ul>
        {films.map(film => (
          <li>{film.title}</li>
        ))}
      </ul>
    </Card>
  );
}

export default Films;
