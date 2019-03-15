import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, Unordered } from "./style.js";

export const HomeWorld = ({
  name,
  population,
  gravity,
  diameter,
  terrain,
  orbital_period,
  rotation_period,
  climate,
}) => (
  <Card>
    <CardHeader>ABOUT HOMEWORLD</CardHeader>
    <Unordered>
      <li>NAME : {name}</li>
      <li>POPULATION : {population}</li>
      <li>GRAVITY : {gravity}</li>
      <li>DIAMETER : {diameter}</li>
      <li>TERRAIN : {terrain}</li>
      <li>CLIMATE : {climate}</li>
      <li>ROTATION PERIOD : {rotation_period}</li>
      <li>ORBITAL PERIOD : {orbital_period}</li>
    </Unordered>
  </Card>
);

HomeWorld.propTypes = {
  name: PropTypes.string,
  population: PropTypes.string,
  gravity: PropTypes.string,
  diameter: PropTypes.string,
  terrain: PropTypes.string,
  rotation_period: PropTypes.string,
  orbital_period: PropTypes.string,
};
