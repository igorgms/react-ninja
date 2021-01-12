"use strict";

import React, { Component } from "react";
// import Title from "./title";
import Square from "./square";

class App extends Component {
  render() {
    return (
      <div className="container">
        {["blue", "red", "green", "yellow"].map((square) => (
          // a key é ncessária para que o react possa saber se o elemento que está sendo passado no array é NavigationPreloadManager, ou se é preciso destruir o que existia anteriormente, caso o elemento seja o mesmo o DOM sabe que não precisa modificá-lo
          <Square key={square} color={square} />
        ))}
      </div>
    );
  }
}

export default App;
