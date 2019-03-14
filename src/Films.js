import React from "react";

import { Card } from "./style.js";

const Films = ({ films }) => {
  console.log(films);
  return (
    <Card>
      <ul>
        {films.map(film => (
          <li key={film.title}>
            {film.title} -- {film.release_date}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Films;
