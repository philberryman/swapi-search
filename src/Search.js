import React from "react";
import Downshift from "downshift";
import { Results } from "./style.js";

export default ({ people, selectPerson, name, inputOnChange }) => {
  console.log(people);
  return (
    <Results>
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
            <label {...getLabelProps()}>Enter a name</label>
            <input {...getInputProps({ onChange: inputOnChange })} />
            {isOpen ? (
              <div>
                {people
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
                      {item.name}
                    </div>
                  ))}
              </div>
            ) : null}
          </div>
        )}
      </Downshift>
    </Results>
  );
};
