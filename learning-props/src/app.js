"use strict";

import React, { Component } from "react";
import Button from "./button";
import LikeButton from "./like-button";
import SearchButton from "./search-button";
class App extends Component {
  render() {
    return (
      <div className="container">
        <Button>
          <span>Texto</span>
          outro texto
        </Button>
        <LikeButton />
        <SearchButton />
      </div>
    );
  }
}

export default App;
