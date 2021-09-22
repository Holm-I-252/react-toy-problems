import React, { Component } from "react";

export default class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      palindrome: "",
    };
  }

  setInput(value) {
    this.setState({ userInput: value });
  }

  checkPalindrome(input) {
    let normal = input;
    let reversed = input;

    reversed = reversed.split("");
    reversed = reversed.reverse();
    reversed = reversed.join("");

    if (normal === reversed) {
      this.setState({ palindrome: "true" });
    } else {
      this.setState({ palindrome: "false" });
    }
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          className="inputLine"
          onChange={(e) => this.setInput(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => {
            this.checkPalindrome(this.state.userInput);
          }}
        >
          Test
        </button>
        <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
      </div>
    );
  }
}
