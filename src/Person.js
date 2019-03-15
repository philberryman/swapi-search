import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, Unordered } from "./style.js";

export const Person = ({
  name,
  height,
  mass,
  hair_color,
  skin_color,
  eye_color,
  gender,
}) => (
  <Card>
    <CardHeader>CORE FACTS</CardHeader>
    <Unordered>
      <li>NAME : {name}</li>
      <li>HEIGHT : {height}</li>
      <li>MASS : {mass}</li>
      <li>HAIR COLOR : {hair_color}</li>
      <li>SKIN COLOR : {skin_color}</li>
      <li>EYE COLOR : {eye_color}</li>
      <li>GENDER : {gender}</li>
    </Unordered>
  </Card>
);

Person.propTypes = {
  name: PropTypes.string,
  height: PropTypes.string,
  mass: PropTypes.string,
  hair_color: PropTypes.string,
  skin_color: PropTypes.string,
  eye_color: PropTypes.string,
  gender: PropTypes.string,
};
