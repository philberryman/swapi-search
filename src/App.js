import React, { Component } from "react";
import Search from "./Search";
import Person from "./Person";
import Films from "./Films";
import HomeWorld from "./HomeWorld";
import Vehicles from "./Vehicles";

import { Heading, Cards } from "./style.js";

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
    this.selectPerson = this.selectPerson.bind(this);
    this.inputOnChange = this.inputOnChange.bind(this);
  }

  inputOnChange(event) {
    console.log("input on change");
    this.setState({ search: event.target.value.toLowerCase() });
    this.fetchPeople(event.target.value.toLowerCase());
  }

  fetchPeople(searchInput) {
    const apiURL = `https://swapi.co/api/people/?search=${searchInput}`;
    fetch(apiURL)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        if (searchInput === this.state.search) {
          this.setState({ people: json.results });
          console.log(json);
        }
        // if search is empty clear results
        if (this.state.search === "") {
          this.setState({ people: [] });
        }
      });
  }

  fetchVehicles(Urls) {
    Promise.all(Urls.map(Url => fetch(Url).then(res => res.json()))).then(
      json => {
        this.setState({ vehicles: json });
      }
    );
  }

  fetchFilms(Urls) {
    Promise.all(Urls.map(Url => fetch(Url).then(res => res.json()))).then(
      json => {
        this.setState({ films: json });
      }
    );
  }

  selectPerson(person) {
    this.setState({ selectedPerson: person });
    this.fetchVehicles(person.vehicles);
    this.fetchFilms(person.films);
  }

  render() {
    return (
      <div className="App">
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
      </div>
    );
  }
}

export default App;
