import React, { Component } from 'react';
import Cards from "./cards";
import CardForm from "./cardsForm";

class App extends Component {
  state = {
    cards: [
      {id: 1, frontText: "Front One", backText: "Back One"},
      {id: 2, frontText: "Front Two", backText: "Back Two"},
      {id: 3, frontText: "Front Three", backText: "Back Three"},
      {id: 4, frontText: "Front Four ", backText: "Back Four"},
      {id: 5, frontText: "Front Five", backText: "Back Five"}
    ]
  };


  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
