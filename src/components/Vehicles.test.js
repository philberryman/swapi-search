import "jest-dom/extend-expect";
import React from "react";
import { render } from "react-testing-library";
import { Vehicles } from "./Vehicles";

const vehicles = [
  {
    name: "Imperial Speeder Bike",
  },
];

test("Renders vehicles component with single vehicle - Imperial Speeder Bike", () => {
  const { getByText } = render(<Vehicles vehicles={vehicles} />);
  const name = getByText(/Imperial Speeder Bike/i);
  expect(name).toHaveTextContent("Imperial Speeder Bike");
});
