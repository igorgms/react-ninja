"use strict";

import React from "react";

const Square = ({ color }) => (
  // para utilizar o style inline em jsx é necessário passa-lo como um objeto com seus métodos
  <div
    style={{
      backgroundColor: color,
      height: "100px",
      width: "100px",
    }}
  />
);

Square.defaultProps = {
  color: "red",
};
export default Square;
