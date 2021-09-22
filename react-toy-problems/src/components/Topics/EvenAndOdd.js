import React, { Component } from "react";

export default class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: "",
    };
  }

  updateInput(value) {
    this.setState({ userInput: value });
  }

  splitArray(input) {
    let split = input.split("");
    let evenNums = [];
    let oddNums = [];
    console.log(split);

    if (split.length <= 0) {
      alert("Enter some numbers");
      return;
    }

    for (let i = 0; i < split.length; i++) {
      if (!evenNums.includes(split[i]) && !oddNums.includes(split[i])) {
        if (split[i] % 2 === 0) {
          evenNums.push(split[i]);
        } else {
          oddNums.push(split[i]);
        }
      }
    }
    this.setState({ evenArray: evenNums, oddArray: oddNums });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          placeholder="Enter Numbers"
          onChange={(e) => this.updateInput(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => {
            this.splitArray(this.state.userInput);
          }}
        >
          Split
        </button>
        <span className="resultsBox">
          Even: {JSON.stringify(this.state.evenArray)}
        </span>
        <span className="resultsBox">
          Odd: {JSON.stringify(this.state.oddArray)}
        </span>
      </div>
    );
  }
}
