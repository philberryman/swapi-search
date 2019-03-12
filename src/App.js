import React, { Component } from "react";
import Downshift from "downshift";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      people: [],
    };
    this.fetchPeople = this.fetchPeople.bind(this);
    this.inputOnChange = this.inputOnChange.bind(this);
  }

  inputOnChange(event) {
    if (!event.target.value) {
      return;
    }
    this.setState({ search: event.target.value.toLowerCase() });
    this.fetchPeople(event.target.value.toLowerCase());
  }

  downshiftOnChange(selectedMovie) {
    alert(`your favourite person is ${selectedMovie}`);
  }
  // method to fetch the people from SWAPI
  fetchPeople(person) {
    const apiURL = `https://swapi.co/api/people/?search=${person}`;
    axios.get(apiURL).then(response => {
      const { responseURL } = response.request;
      const responseURLString = decodeURIComponent(
        responseURL.split("=")[1]
      ).toLowerCase();

      // only update state if search query is still the same as query of response
      if (responseURLString === this.state.search) {
        this.setState({ people: response.data.results });
        console.log("true");
        console.log(this.state.people);
      }

      console.log(
        `movie : ${person} search : ${
          this.state.search
        } responseURL : ${responseURLString}`
      );

      // if search is empty clear results
      if (this.state.search === "") {
        this.setState({ movies: [] });
        console.log("if search is blank");
      }
    });
  }

  render() {
    return (
      <Downshift
        onChange={selection => alert(`You selected ${selection.name}`)}
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
                      item.name.toLowerCase().includes(inputValue.toLowerCase())
                  )
                  .map((item, index) => (
                    <div
                      {...getItemProps({
                        key: item.name,
                        index,
                        item,
                        style: {
                          backgroundColor:
                            highlightedIndex === index ? "lightgray" : "white",
                          fontWeight: selectedItem === item ? "bold" : "normal",
                        },
                      })}
                    >
                      {item.name.toLowerCase()}
                    </div>
                  ))}
              </div>
            ) : null}
          </div>
        )}
      </Downshift>
    );
  }
}

export default App;
