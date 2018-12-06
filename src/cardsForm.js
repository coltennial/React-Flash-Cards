import React from "react";

class CardsForm extends React.Component {
  state = {frontText: ""};
  state = {backText: ""};

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({ frontText: ""});
    this.setState({ backText: ""});
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  };

  render () { 
    return ( 
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            label="Card Description (Front)"
            placeholder="(Front)"
            name="frontText"
            value={this.state.name}
            onChange={this.handleChange}
          />
        
          <input
            label="Card Answer (Back)"
            placeholder="(Back)"
            name="backText"
            value={this.state.backText}
            onChange={this.handleChange}
          />
          <button> Submit </button>
        </div>
      </form>

    )
  }
};

export default CardsForm;