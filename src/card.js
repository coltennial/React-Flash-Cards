import React from "react";

const Card = ({ id, frontText, remove2, backText}) => (

  <div id="front-back">
    <p id="front-text">{frontText}</p>
    <p id="back-text">{backText}</p>
    <button onClick={() => remove2(id)}>Burn</button>
  </div>
);

export default Card;