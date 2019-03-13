import React from "react";

import { Card } from "./style.js";

function Films({ films }) {
  console.log(films);
  return (
    <Card>
      <ul>
        {films.map(film => (
          <li>
            {film.title} -- {film.release_date}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default Films;
