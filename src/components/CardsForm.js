import React from "react";

class CardsForm extends React.Component {
  state = {frontText: "", body: "" };

  componentDidMount() {
    if (this.props.id) {
      const {frontText, backText} = this.props;
      this.setState({ frontText, backText});
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.edit({ id: this.props.id, ...this.state });
      this.props.toggleEdit();
    } else {
      this.props.addFunction(this.state);
    }
    this.setState({ frontText: "", backText: ""})
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  };

  render () { 
    return ( 
      <form onSubmit={this.handleSubmit}>
        <div id="form">
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