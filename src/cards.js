import React from "react";
import Card from "./Card";

const Cards = ({ cards, remove, cardBack }) => (
  <div>
    {
      
cards.map( card => (
  <Card key={card.id} {...card} remove2={remove} />
      ))

    }
  </div>
)


export default Cards;
