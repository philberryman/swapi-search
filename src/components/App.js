import React, { useState } from "react";
import { Search } from "./Search";
import { Person } from "./Person";
import { Films } from "./Films";
import { HomeWorld } from "./HomeWorld";
import { Vehicles } from "./Vehicles";

import { fetchFromArrayOfUrls, fetchFromUrl } from "../helpers/fetch";

import { Heading, Cards, Wrapper } from "../styles/style.js";

const App = () => {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState("");
  const [vehicles, setVehicles] = useState([]);
  const [films, setFilms] = useState([]);
  const [homeWorld, setHomeWorld] = useState([]);
  const [searchCache, setSearchCache] = useState({});

  const inputOnChange = event => fetchPeople(event.target.value.toLowerCase());
  const fetchPeople = searchInput => {
    if (searchInput === "") {
      setPeople([]);
    } else if (searchCache[searchInput]) {
      setPeople(searchCache[searchInput]);
    } else {
      const apiUrl = `https://swapi.co/api/people/?search=${searchInput}`;
      fetch(apiUrl)
        .then(res => res.json())
        .then(json => {
          if (searchInput) {
            setPeople(json.results);
            const newResults = { [searchInput]: json.results };
            const newSearchCache = Object.assign({}, searchCache, newResults);
            setSearchCache(newSearchCache);
          }
        })
        .catch(error => console.log(error));
    }
  };

  const selectPerson = person => {
    setPerson(person);
    fetchFromUrl(person.homeworld)
      .then(data => setHomeWorld(data))
      .catch(error => console.log(error));
    fetchFromArrayOfUrls(person.vehicles)
      .then(data => setVehicles(data))
      .catch(error => console.log(error));
    fetchFromArrayOfUrls(person.films)
      .then(data => setFilms(data))
      .catch(error => console.log(error));
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
        {person.films && (
          <Cards>
            <Person {...person} />
            <Films films={films} />
            <HomeWorld {...homeWorld} />
            <Vehicles vehicles={vehicles} />
          </Cards>
        )}
      </Wrapper>
    </div>
  );
};

export default App;
