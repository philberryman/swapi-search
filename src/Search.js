import React from "react";
import PropTypes from "prop-types";
import Downshift from "downshift";
import { SearchBox, SearchInput, Result } from "./style.js";

export const Search = ({ people, selectPerson, name, inputOnChange }) => (
  <SearchBox>
    <Downshift
      onChange={selection => selectPerson(selection)}
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
          <label {...getLabelProps()}>Enter a name :</label>
          <SearchInput
            {...getInputProps({
              onChange: inputOnChange,
            })}
          />
          {isOpen ? (
            <div>
              {people
                .filter(
                  item =>
                    !inputValue ||
                    item.name.toLowerCase().includes(inputValue.toLowerCase())
                )
                .map((item, index) => (
                  <Result
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
                    {item.name}
                  </Result>
                ))}
            </div>
          ) : null}
        </div>
      )}
    </Downshift>
  </SearchBox>
);

Search.propTypes = {
  people: PropTypes.array,
  selectPerson: PropTypes.func,
  inputOnChance: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};
