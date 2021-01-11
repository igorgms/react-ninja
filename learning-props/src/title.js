"use strict";

import React from "react";

const Title = React.createClass({
  // Caso não seja passado nenhuma props na tag title no app.js, essa propriedade se torna o padrão do name
  getDefaultProps: function () {
    return {
      name: "Desconhecido",
      lastname: "Sem sobrenome",
    };
  },
  render: function () {
    return <h1>Olá, {this.props.name + " " + this.props.lastname}!</h1>;
  },
});

export default Title;
