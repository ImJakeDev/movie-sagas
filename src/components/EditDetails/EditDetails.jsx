// React Imports:
import React, { Component } from "react";
// Redux Imports:
import { connect } from "react-redux";
// React Router DOM Imports:
import { withRouter } from 'react-router-dom';

class EditDetails extends Component {
  // Not sure if this will work...
  state = {
    id: `${this.props.id}`,
    title: `${this.props.title}`,
    description: `${this.props.description}`
  }

  handleChangeFor = (propertyName, event) => {
    this.setState({
      [propertyName]: event.target.value 
    });
  };

  addEdit = (event) => {
    event.preventDefault();
    // How do I send only the items that have been changed?
    this.props.dispatch({ type: "EDIT_MOVIE", payload: this.state });
    // this.setState({
    // });
    this.props.history.push('/details')
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

export default withRouter (connect()(EditDetails));