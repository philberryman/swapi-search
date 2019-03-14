import React, { useState } from "react";
import Search from "./Search";
import Person from "./Person";
import Films from "./Films";
import HomeWorld from "./HomeWorld";
import Vehicles from "./Vehicles";

import { Heading, Cards, Wrapper } from "./style.js";

const App = () => {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState("");
  const [vehicles, setVehicles] = useState([]);
  const [films, setFilms] = useState([]);
  const [homeWorld, setHomeWorld] = useState([]);
  const [searchCache, setSearchCache] = useState({});

  const inputOnChange = event => {
    fetchPeople(event.target.value.toLowerCase());
  };

  const fetchPeople = searchInput => {
    if (searchInput === "") {
      setPeople([]);
    } else if (searchCache[searchInput]) {
      console.log("exists");
      console.log(searchInput);
      setPeople(searchCache[searchInput]);
    } else {
      console.log("does NOT exist");
      console.log(searchInput);
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
          // if search is empty clear results
        });
    }
  };

  const fetchVehicles = urls => {
    Promise.all(urls.map(url => fetch(url).then(res => res.json()))).then(
      json => {
        setVehicles(json);
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
        setHomeWorld(json);
      });
  };

  const selectPerson = person => {
    console.log(person);
    setPerson(person);
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
        {person.films && (
          <Cards>
            <Person person={person} />
            <Films films={films} />
            <HomeWorld homeWorld={homeWorld} />
            <Vehicles vehicles={vehicles} />
          </Cards>
        )}
      </Wrapper>
    </div>
  );
};

export default App;
