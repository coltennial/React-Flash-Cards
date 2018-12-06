import React, { Component } from 'react';
import Cards from "./Cards";
import CardsForm from "./CardsForm";

class App extends Component {
  state = {
    cards: [
      {id: 1, frontText: "Front One", backText: "Back One"},
      {id: 2, frontText: "Front Two", backText: "Back Two"},
    ],
    showForm: true
  };

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addCard = (cardData) => {
    let card = { id: this.getId(), ...cardData };
    this.setState({ cards: [card, ...this.state.cards]});
  };

  
  removeCard = (id) => {
    const cards = this.state.cards.filter( card => {
      if (card.id !== id)
      return card
    });
    this.setState({ cards: [...cards]});
  };

  toggleForm = () => this.setState({ showForm: !this.state.showForm})

  render() {

    return (
      <div>
        <h1> Flash Cards </h1>
        <div>
          <button onClick={this.toggleForm}>
           *- Show Form -*
          </button>
          
        </div>
        {this.state.showForm ? <CardsForm add={this.addCard} /> : null}
        <Cards cards={this.state.cards} remove={this.removeCard} showBack={this.toggleBack} />
        {this.state.showBack ? <CardsForm add={this.addCard} /> : null}
      </div>
    );
  }
}

export default App;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { Component } from 'react';
// import Cards from "./Cards";
// import CardsForm from "./CardsForm";

// class App extends Component {
//   state = {
//     cards: [
//       {id: 1, frontText: "Front One"},
//       {id: 2, frontText: "Front Two"},
//     ],
//     cardBack: [
//       {backText: "Back One", showBack: false},
//       {backText: "Back Two", showBack: true}
//     ],
//     showForm: true
//   };

//   getId = () => {
//     return Math.floor((1 + Math.random()) * 0x10000)
//       .toString(16)
//       .substring(1);
//   };

//   addCard = (cardData) => {
//     let card = { id: this.getId(), ...cardData };
//     this.setState({ cards: [card, ...this.state.cards]});
//   };

  
//   removeCard = (id) => {
//     const cards = this.state.cards.filter( card => {
//       if (card.id !== id)
//       return card
//     });
//     this.setState({ cards: [...cards]});
//   };

//   toggleForm = () => this.setState({ showForm: !this.state.showForm})

//   toggleBack = () => this.setState({ showBack: !this.state.showBack})
  

//   render() {

//     return (
//       <div>
//         <h1> Flash Cards </h1>
//         <div>
//           <button onClick={this.toggleForm}>
//            *- Show Form -*
//           </button>
          
//         </div>
//         {this.state.showForm ? <CardsForm add={this.addCard} /> : null}
//         <Cards cards={this.state.cards} remove={this.removeCard} showBack={this.toggleBack} />
//         {this.state.showBack ? <CardsForm add={this.addCard} /> : null}
//       </div>
//     );
//   }
// }

// export default App;

