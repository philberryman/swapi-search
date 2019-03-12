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
      if (person === this.state.search) {
        this.setState({ people: response.data.results });
      }

      // if search is empty clear results
      if (this.state.search === "") {
        this.setState({ people: [] });
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
