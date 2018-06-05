import React, { Component } from "react";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.content = fetch("http://example.com/movies.json").then((response) => {
      return response.json();
    }).then((response) => {
      console.log(response.json());
    });
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
