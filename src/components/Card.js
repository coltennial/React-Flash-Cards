import React from "react";
import CardsForm from "./CardsForm";

class Card extends React.Component {
  state = { editing: false };

  toggleEdit = () => this.setState({ editing: !this.state.editing });

  render() {
    return (
      <section>
        {
          this.state.editing ? 
          <CardsForm {...this.props} toggleEdit={this.toggleEdit}/>
          :
          <div id="front-back">
            <p> {this.props.frontText} </p>
            <p> {this.props.backText} </p>
          </div>
        }

        <div id="edit-del">
          <button id="edit" onClick={this.toggleEdit}>Edit</button>
          <button id="remove" onClick={() => this.props.remove(this.props.id)}>Remove</button>
        </div>
      </section>
    )
  }
}

export default Card;