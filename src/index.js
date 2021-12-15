import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// 1:: Implementing add note function 
//Creating a constant that keeps track of title and content
//Then pass the new note back to the App.jsx
//Add new note to an array (state)
//take array and render separate note components for each item

// 2:: Implementing delete note function
//callback from note component to trigger delete function
//use filter function to filter out item that needs deletion
//pass id over to note component, pass it back to App.jsx
