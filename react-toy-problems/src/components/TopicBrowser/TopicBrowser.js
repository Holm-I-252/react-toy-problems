import React, { Component } from "react";
import { render } from "react-dom";
import EvenAndOdd from "../Topics/EvenAndOdd.js";
import FilterObject from "../Topics/FilterObject.js";
import FilterString from "../Topics/FilterString.js";
import Palindrome from "../Topics/Palindrome.js";
import Sum from "../Topics/Sum.js";

let TopicBrowser = () => {
  return React.createElement("div", null, [
    EvenAndOdd(),
    FilterObject(),
    FilterString(),
    Palindrome(),
    Sum(),
  ]);
};

export default TopicBrowser;
