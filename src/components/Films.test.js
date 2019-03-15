import "jest-dom/extend-expect";
import React from "react";
import { render } from "react-testing-library";
import { Films } from "./Films";

const films = [
  {
    title: "The Empire Strikes Back",
    release_date: "1980-05-17",
    director: "Irvin Kershner",
  },
];

test("Renders films component with single film - The Empire Strikes Back", () => {
  const { getByText } = render(<Films films={films} />);
  const name = getByText(/The Empire Strikes Back/i);
  expect(name).toHaveTextContent("The Empire Strikes Back");
});
