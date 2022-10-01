import React, { Component } from 'react';
import PropTypes from "prop-types";
import './new-task-form.css';

export default class NewTaskForm extends Component {

  static propTypes = {
    onItemAdded: PropTypes.func,
  };
  
    state = {
      label: '',
  }

  onLabelChange = (e) => {
      this.setState({
          label: e.target.value
      })
  }

  onSubmit = (e) => {
      e.preventDefault();
      this.props.onItemAdded(this.state.label)
      this.setState({label: ''})
  }

  render () {
    return (
      <div className="header">
        <h1>todos</h1>
        <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input value={ this.state.label } onChange={this.onLabelChange} className="new-todo" placeholder="What needs to be done?" autoFocus/>
        </form>
      </div>
    );
  }
}
