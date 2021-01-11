"use strict";

import React from "react";
import Title from "./title";

const App = React.createClass({
  render: function () {
    return (
      <div className="container">
        {/* para passar um numero, array, objeto ou qualquer outro tipo de dado que não seja string é ncessário passá-lo entre chaves, igual o exemplo abaixo */}
        <Title name="Igor" lastname={1} />
      </div>
    );
  },
});

export default App;
