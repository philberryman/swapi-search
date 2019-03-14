import React from "react";
import { Card } from "./style.js";

const Vehicles = ({ vehicles }) => {
  return (
    <Card>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.name}>{vehicle.name}</li>
        ))}
      </ul>
    </Card>
  );
};

export default Vehicles;
