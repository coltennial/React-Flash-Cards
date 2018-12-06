import React from "react";
import Card from "./Card";
import CardsForm from "./CardsForm";

class Flashcards extends React.Component {
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

  renderCards = () => {
    return this.state.cards.map( card => <Card key={card.id} {...card} edit={this.editCard} remove={this.removeCard} />);
  }

  addCard = (cardData) => {
    const { cards } = this.state;
    const card = { id: this.getId(), ...cardData };
    this.setState({ cards: [card, ...cards]});
  };

  editCard = (cardData) => {
    const cards = this.state.cards.map( card => {
      if (card.id === cardData.id)
        return cardData;
        return card;
    })
    this.setState({ cards });
  }

  removeCard = (id) => {
    const cards = this.state.cards.filter( card => {
      if (card.id !== id)
      return card;
    });
    this.setState({ cards });
  }

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
        {this.state.showForm ? <CardsForm addFunction={this.addCard} /> : null}
        { this.renderCards() }
      </div>
    );
  }
}

export default Flashcards;
