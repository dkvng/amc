import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      content: {},
      meta: {}
    };
  }

  componentDidMount() {
    fetch("http://srx.pubcdn.net/pdata.php?v=2&id=1940&x=6")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          content: data.c,
          meta: data.m
        });
      });
  }

  allContent() {
    return this.state.content.map(el => {
      return (
        <section>
          <img src={el.i} />
          <div dangerouslySetInnerHTML={{ __html: el.t }} />
        </section>
      );
    });
  }

  render() {
    return (
      <div className="App">
        {Object.values(this.state.meta).length > 0 ? (
          <img src={this.state.meta.i} />
        ) : (
          ""
        )}

        {Object.values(this.state.content).length > 0 ? this.allContent() : ""}
      </div>
    );
  }
}

export default App;
