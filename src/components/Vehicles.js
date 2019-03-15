import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, Unordered } from "../styles/style.js";

export const Vehicles = ({ vehicles }) => (
  <Card>
    <CardHeader>VEHICLES</CardHeader>
    <Unordered>
      {vehicles.map(vehicle => (
        <li key={vehicle.name}>{vehicle.name}</li>
      ))}
    </Unordered>
  </Card>
);

Vehicles.propTypes = {
  vehicles: PropTypes.array,
};
