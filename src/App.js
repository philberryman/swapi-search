import React, { Component } from "react";
import Downshift from "downshift";
import axios from "axios";
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
    this.inputOnChange = this.inputOnChange.bind(this);
  }

  inputOnChange(event) {
    console.log("input on change");
    this.setState({ search: event.target.value.toLowerCase() });
    this.fetchPeople(event.target.value.toLowerCase());
  }

  // downshiftOnChange(selectedPerson) {
  //   alert(`your favourite person is ${selectedPerson}`);
  // }
  // method to fetch the people from SWAPI
  fetchPeople(searchInput) {
    const apiURL = `https://swapi.co/api/people/?search=${searchInput}`;
    axios.get(apiURL).then(response => {
      if (searchInput === this.state.search) {
        this.setState({ people: response.data.results });
        console.log(response);
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
        <Downshift
          onChange={selection => this.selectPerson(selection)}
          itemToString={item => (item ? item.name : "")}
        >
          {({
            getInputProps,
            getItemProps,
            getLabelProps,
            isOpen,
            inputValue,
            highlightedIndex,
            selectedItem,
          }) => (
            <div>
              <label {...getLabelProps()}>Enter a name</label>
              <input {...getInputProps({ onChange: this.inputOnChange })} />
              {isOpen ? (
                <div>
                  {this.state.people
                    .filter(
                      item =>
                        !inputValue ||
                        item.name
                          .toLowerCase()
                          .includes(inputValue.toLowerCase())
                    )
                    .map((item, index) => (
                      <div
                        {...getItemProps({
                          key: item.name,
                          index,
                          item,
                          style: {
                            backgroundColor:
                              highlightedIndex === index
                                ? "lightgray"
                                : "white",
                            fontWeight:
                              selectedItem === item ? "bold" : "normal",
                          },
                        })}
                      >
                        {item.name}
                      </div>
                    ))}
                </div>
              ) : null}
            </div>
          )}
        </Downshift>
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
