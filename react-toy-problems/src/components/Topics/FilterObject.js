import React, { Component } from "react";

export default class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        { name: "Ian", age: 22 },
        { name: "Will", age: 24 },
        { name: "Lucas", age: 22 },
      ],
      userInput: "",
      filteredArray: [],
    };
  }

  setInput(value) {
    this.setState({ userInput: value });
  }

  filterArray(userInput) {
    let arr = this.state.unFilteredArray;
    if (this.state.userInput === "") {
      alert("Enter a filter");
      return;
    }
    let filtered = [...arr];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === userInput || arr[i].age === userInput) {
        filtered.splice(i, 1);
      }
    }
    this.setState({ filteredArray: filtered });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Orignal: {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          className="inputLine"
          onChange={(e) => {
            this.setInput(e.target.value);
          }}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.filterArray(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}
