import "jest-dom/extend-expect";
import React from "react";
import { render } from "react-testing-library";
import { HomeWorld } from "./HomeWorld";

const homeWorld = {
  name: "Tatooine",
  population: "200000",
  gravity: "1 standard",
};

test("Renders home world component with Tatooine object", () => {
  const { getByText } = render(<HomeWorld {...homeWorld} />);
  const name = getByText(/Tatooine/i);
  expect(name).toHaveTextContent("Tatooine");
});
