import React, { Component } from "react";
import Downshift from "downshift";

const items = [
  { fruit: true, value: "apple" },
  { fruit: true, value: "pear" },
  { fruit: true, value: "orange" },
  { fruit: true, value: "grape" },
  { fruit: true, value: "banana" },
  { fruit: false, value: "apple" },
  { fruit: false, value: "pear" },
  { fruit: false, value: "orange" },
  { fruit: false, value: "grape" },
  { fruit: false, value: "banana" },
];

class App extends Component {
  render() {
    return (
      <Downshift
        onChange={selection => alert(`You selected ${selection.value}`)}
        itemToString={item => (item ? item.value : "")}
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
            <label {...getLabelProps()}>Enter a fruit</label>
            <input {...getInputProps()} />
            {isOpen ? (
              <div>
                {items
                  .filter(
                    item => !inputValue || item.value.includes(inputValue)
                  )
                  .map((item, index) => (
                    <div>
                      <div>{item.fruit ? "fruit" : "veg"}</div>
                      <div
                        {...getItemProps({
                          key: item.value,
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
                        {item.value}
                      </div>
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
