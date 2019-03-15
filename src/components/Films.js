import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, Unordered } from "../styles/style.js";

export const Films = ({ films }) => (
  <Card>
    <CardHeader>APPEARS IN</CardHeader>
    <Unordered>
      {films.map(film => (
        <li key={film.title}>
          {film.title} ({film.release_date} - {film.director})
        </li>
      ))}
    </Unordered>
  </Card>
);

Films.propTypes = {
  films: PropTypes.array,
};
