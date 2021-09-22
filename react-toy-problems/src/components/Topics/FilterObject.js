import React, { Component } from "react";

let FilterObject = () => {
  let unFilteredArray = [
    { name: "Ian", age: 22 },
    { name: "Will", age: 24 },
    { name: "Lucas", age: 22 },
  ];
  let userInput = "";
  let filteredArray = [];

  console.log(userInput);

  function filterArray() {
    if (userInput === "") {
      alert("Enter a filter");
      return;
    }
    filteredArray = [...unFilteredArray];
    for (let i = 0; i < unFilteredArray.length; i++) {
      if (
        unFilteredArray[i].name == userInput ||
        unFilteredArray[i].age == userInput
      ) {
        filteredArray.splice(i, 1);
      }
    }
    console.log(filteredArray);
    document.getElementById("result").innerHTML = JSON.stringify(filteredArray);
  }

  function Results(props) {
    return (
      <span className="resultsBox filterObjectRB" id="result">
        Filtered: {props.arr}
      </span>
    );
  }

  return (
    <div className="puzzleBox filterObjectPB">
      <h4>Filter Object</h4>
      <span className="puzzleText">
        Orignal: {JSON.stringify(unFilteredArray)}
      </span>
      <input
        className="inputLine"
        onChange={(e) => {
          userInput = e.target.value;
        }}
      ></input>
      <button className="confirmationButton" onClick={filterArray}>
        Filter
      </button>
      <Results arr={filteredArray} />
    </div>
  );
};

export default FilterObject;
