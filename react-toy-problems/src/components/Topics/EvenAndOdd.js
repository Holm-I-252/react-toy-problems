import React, { Component, useState } from "react";

let EvenAndOdd = () => {
  let evenArray = [];
  let oddArray = [];
  let userInput = "";
  console.log(userInput);

  function splitArray() {
    evenArray = [];
    oddArray = [];
    console.log(userInput);
    let split = userInput.split("");
    if (split.length <= 0) {
      alert("Enter some numbers");
      return;
    }
    for (let i = 0; i < split.length; i++) {
      if (!evenArray.includes(split[i]) && !oddArray.includes(split[i])) {
        if (split[i] % 2 === 0) {
          evenArray.push(split[i]);
        } else {
          oddArray.push(split[i]);
        }
      }
    }
    console.log(evenArray, oddArray);
    document.getElementById("even").innerHTML = evenArray;
    document.getElementById("odd").innerHTML = oddArray;
  }

  function ResultsEven(props) {
    return (
      <span className="resultsBox" id="even">
        Evens: {props.arr1}
      </span>
    );
  }

  function ResultsOdd(props) {
    return (
      <span className="resultsBox" id="odd">
        Odds: {props.arr2}
      </span>
    );
  }

  let element = (
    <div className="puzzleBox evenAndOddPB">
      <h4>Evens and Odds</h4>
      <input
        className="inputLine"
        placeholder="Enter Numbers"
        onChange={(e) => (userInput = e.target.value)}
      ></input>
      <button className="confirmationButton" onClick={splitArray}>
        Split
      </button>
      <ResultsEven arr1={evenArray} />
      <ResultsOdd arr2={oddArray} />
    </div>
  );

  return element;
};

export default EvenAndOdd;
