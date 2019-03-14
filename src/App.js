import React, { Component } from "react";
import Search from "./Search";
import Person from "./Person";
import Films from "./Films";
import HomeWorld from "./HomeWorld";
import Vehicles from "./Vehicles";

import { Heading, Cards, Wrapper } from "./style.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      people: [],
      selectedPerson: {},
      vehicles: [],
      films: [],
    };
    this.fetchPeople = this.fetchPeople.bind(this);
    this.fetchVehicles = this.fetchVehicles.bind(this);
    this.fetchFilms = this.fetchFilms.bind(this);
    this.fetchHomeWorld = this.fetchHomeWorld.bind(this);
    this.selectPerson = this.selectPerson.bind(this);
    this.inputOnChange = this.inputOnChange.bind(this);
  }

  inputOnChange(event) {
    this.setState({ search: event.target.value.toLowerCase() });
    this.fetchPeople(event.target.value.toLowerCase());
  }

  fetchPeople(searchInput) {
    const apiUrl = `https://swapi.co/api/people/?search=${searchInput}`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(json => {
        if (searchInput === this.state.search) {
          this.setState({ people: json.results });
        }
        // if search is empty clear results
        if (this.state.search === "") {
          this.setState({ people: [] });
        }
      });
  }

  fetchVehicles(urls) {
    Promise.all(urls.map(url => fetch(url).then(res => res.json()))).then(
      json => {
        this.setState({ vehicles: json });
      }
    );
  }

  fetchFilms(urls) {
    Promise.all(urls.map(url => fetch(url).then(res => res.json()))).then(
      json => {
        this.setState({ films: json });
      }
    );
  }

  fetchHomeWorld(url) {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({ homeWorld: json });
      });
  }

  selectPerson(person) {
    this.setState({ selectedPerson: person });
    this.fetchHomeWorld(person.homeworld);
    this.fetchVehicles(person.vehicles);
    this.fetchFilms(person.films);
  }

  render() {
    return (
      <div className="App">
        <Wrapper>
          <Heading>Star Wars - People Search</Heading>
          <Search
            people={this.state.people}
            selectPerson={this.selectPerson}
            inputOnChange={this.inputOnChange}
            label="Select your favourite book"
            name="book"
            placeholder="Search your favourite book"
          />
          {this.state.selectedPerson.films && (
            <Cards>
              <Person selectedPerson={this.state.selectedPerson} />
              <Films films={this.state.films} />
              <HomeWorld selectedPerson={this.state.selectedPerson} />
              <Vehicles vehicles={this.state.selectedPerson.vehicles} />
            </Cards>
          )}
        </Wrapper>
      </div>
    );
  }
}

export default App;
