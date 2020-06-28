// React Imports:
import React, { Component } from "react";
// Redux Imports:
import { connect } from "react-redux";

class EditDetails extends Component {
  state = {
    title: '',
    description: ''
  }

  handleChangeFor = (propertyName, event) => {
    this.setState({
      [propertyName]: event.target.value 
    });
  };

  addEdit = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: "???", payload: this.state });
    this.setState({
      title: '',
      description: ''
    });
  };

  render() {
    return (
      <>
        <h4>{this.props.title}</h4>
        <input
          type="text"
          placeholder="Title"
          value={this.state.title}
          onChange={(event) => this.handleChangeFor("title", event)} />
        <p>{this.props.description}</p>
        <input
          type="text"
          placeholder="Description"
          value={this.state.description}
          onChange={(event) => this.handleChangeFor("description", event)} />
        <button onClick={this.addEdit}>Save</button>
      </>
    )
  }
}

export default connect()(EditDetails);