import "jest-dom/extend-expect";
import React from "react";
import { render } from "react-testing-library";
import Person from "./Person";

const person = {
  name: "Luke Skywalker",
  birth_year: "1994",
  skin_color: "blue",
};

test('renders autocomplete list input with a label "Enter a name"', () => {
  const { getByText } = render(<Person person={person} />);
  const name = getByText(/Luke/i);
  expect(name).toHaveTextContent("Luke Skywalker");
});
