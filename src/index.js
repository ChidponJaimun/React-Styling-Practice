import React from "react";
import ReactDom from "react-dom";

const date = new Date(2021, 5, 5, 19);

const timeSel = {
  word: String
};

const colSel = {
  color: String
};

if (date.getHours() >= 0 && date.getHours() <= 12) {
  timeSel.word = "Good Morning.";
  colSel.color = "red";
} else if (date.getHours() > 12 && date.getHours() <= 18) {
  timeSel.word = "Good Afternoon.";
  colSel.color = "green";
} else {
  timeSel.word = "Good Evening.";
  colSel.color = "blue";
}

ReactDom.render(
  <h1 style={colSel} className="heading">
    {timeSel.word}
  </h1>,
  document.getElementById("root")
);

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
