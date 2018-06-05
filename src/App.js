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
    this.state.content.map(item => {
      return (
        <section>
          item
        </section>
      );
    });
  }



  render() {
    console.log(this.state.content);
    console.log(this.state.meta);

    return (
      <div className="App">
        {
          (
            Object.values(this.state.content).length > 0 ? this.state.meta.i : ""
          )
        }
        {
          (Object.values(this.state.content).length > 0 ?
            this.state.content.map((el) => {
              return (
                <section>
                  <img src={el.i}/>
                  {el.t}
                </section>
              );
            }) : "ok"
          )
        }
      </div>
    );
  }
}

export default App;
