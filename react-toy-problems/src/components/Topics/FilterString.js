import React, { Component } from "react";

export default class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        "James",
        "Jessica",
        "Melody",
        "Tyler",
        "Blake",
        "Jennifer",
        "Mark",
        "Maddy",
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
      if (arr[i] === userInput) {
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
