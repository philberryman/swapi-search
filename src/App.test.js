import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import React from "react";
import { render, fireEvent } from "react-testing-library";
import App from "./App";

const mockSuccessResponse = {
  count: 1,
  next: null,
  previous: null,
  results: [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male",
      homeworld: "https://swapi.co/api/planets/1/",
      films: [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/",
        "https://swapi.co/api/films/7/",
      ],
      species: ["https://swapi.co/api/species/1/"],
      vehicles: [
        "https://swapi.co/api/vehicles/14/",
        "https://swapi.co/api/vehicles/30/",
      ],
      starships: [
        "https://swapi.co/api/starships/12/",
        "https://swapi.co/api/starships/22/",
      ],
      created: "2014-12-09T13:50:51.644000Z",
      edited: "2014-12-20T21:17:56.891000Z",
      url: "https://swapi.co/api/people/1/",
    },
  ],
};

test('renders autocomplete list input with a label "Enter a name"', () => {
  const { getByLabelText } = render(<App />);
  const input = getByLabelText(/Enter a name/i);
  expect(input).toHaveAttribute("aria-autocomplete", "list");
});

test("fetches data from server when server returns a successful response", done => {
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });
  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

  const { getByLabelText } = render(<App />);
  const input = getByLabelText(/Enter a name/i);
  const inputText = "Luke";
  fireEvent.change(input, { target: { value: inputText } });

  expect(global.fetch).toHaveBeenCalledWith(
    "https://swapi.co/api/people/?search=luke"
  );
  expect(global.fetch).toHaveBeenCalledTimes(1);

  process.nextTick(() => {
    global.fetch.mockClear();
    done();
  });
});

test("results show in drop down when user searches", done => {
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });
  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

  const { getByLabelText, getByText } = render(<App />);
  const input = getByLabelText(/Enter a name/i);
  const inputText = "Luke";
  fireEvent.change(input, { target: { value: inputText } });

  process.nextTick(() => {
    const results = getByText("Luke Skywalker");
    expect(results).toBeDefined();
    global.fetch.mockClear();
    done();
  });
});

test("fetch is not called a second time when search is the same (caching)", done => {
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });
  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

  const { getByLabelText, getByText } = render(<App />);
  const input = getByLabelText(/Enter a name/i);
  const inputText = "Luke";

  fireEvent.change(input, { target: { value: inputText } });
  fireEvent.change(input, { target: { value: inputText } });

  expect(global.fetch).toHaveBeenCalledTimes(1);

  process.nextTick(() => {
    const results = getByText("Luke Skywalker");
    expect(results).toBeDefined();
    global.fetch.mockClear();
    done();
  });
});
