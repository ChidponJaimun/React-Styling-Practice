//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

let date = new Date();
let hr = date.getHours();
hr = parseInt(hr);
let display = {
  time: "",
  color: {}
};
if (hr < 12) {
  display.time = "Good Morning.";
  display.color = { color: "red" };
} else if (hr >= 12 && hr < 18) {
  display.time = "Good Afternoon.";
  display.color = { color: "green" };
} else {
  display.time = "Good Evening.";
  display.color = { color: "blue" };
}

ReactDOM.render(
  <div>
    <h1 style={display.color}>{display.time}</h1>
  </div>,
  document.getElementById("root")
);
