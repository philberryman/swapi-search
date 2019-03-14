import React, { useState } from "react";
import Search from "./Search";
import Person from "./Person";
import Films from "./Films";
import HomeWorld from "./HomeWorld";
import Vehicles from "./Vehicles";

import { Heading, Cards, Wrapper } from "./style.js";

const App = () => {
  const [people, setPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState("");
  const [vehicles, setVehicles] = useState([]);
  const [films, setFilms] = useState([]);
  const [homeWorld, setHomeWorld] = useState([]);

  const inputOnChange = event => {
    fetchPeople(event.target.value.toLowerCase());
  };

  const fetchPeople = searchInput => {
    const apiUrl = `https://swapi.co/api/people/?search=${searchInput}`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(json => {
        if (searchInput) {
          console.log(searchInput);
          setPeople(json.results);
        }
        // if search is empty clear results
        if (searchInput === "") {
          setPeople([]);
        }
      });
  };

  const fetchVehicles = urls => {
    Promise.all(urls.map(url => fetch(url).then(res => res.json()))).then(
      json => {
        setVehicles(json.results);
      }
    );
  };

  const fetchFilms = urls => {
    Promise.all(urls.map(url => fetch(url).then(res => res.json()))).then(
      json => {
        setFilms(json);
      }
    );
  };

  const fetchHomeWorld = url => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setHomeWorld(json.results);
      });
  };

  const selectPerson = person => {
    setSelectedPerson(person);
    fetchHomeWorld(person.homeworld);
    fetchVehicles(person.vehicles);
    fetchFilms(person.films);
  };

  return (
    <div className="App">
      <Wrapper>
        <Heading>Star Wars - People Search</Heading>
        <Search
          people={people}
          selectPerson={selectPerson}
          inputOnChange={inputOnChange}
          label="Select your favourite book"
          name="book"
          placeholder="Search your favourite book"
        />
        {selectedPerson.films && (
          <Cards>
            <Person selectedPerson={selectedPerson} />
            <Films films={films} />
            <HomeWorld selectedPerson={selectedPerson} />
            <Vehicles vehicles={vehicles} />
          </Cards>
        )}
      </Wrapper>
    </div>
  );
};

export default App;
