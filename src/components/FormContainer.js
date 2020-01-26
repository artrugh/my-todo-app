import React, { Component, createRef } from 'react';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Type your next todo item' };
    this.inputText = createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
    this.inputText.current.focus()
  }
  
  handleChange = e => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.value);
    this.setState({ value: 'Type your next todo item' });
  }

  render() {
    return (
      <div className="form-container">
        <form className="todo-form" onSubmit={this.handleSubmit}>
          <label className="input-item">
            <input
              ref={this.inputText}
              type="text"
              name="todo"
              value={this.state.value}
              onClick={e => e.target.value = ""}
              onChange={this.handleChange}
            />
          </label>
          <input className="btn" type="submit" value="ADD" />
        </form>
      </div>
    );
  }
}

export default FormContainer;
