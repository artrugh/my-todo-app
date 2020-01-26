import React, { Component } from 'react';

import FormContainer from '../components/FormContainer';
import { ToDosContainer } from '../components/ToDosContainer';
import { ToDonesContainer } from '../components/ToDonesContainer';
import { Spinner } from '../components/Spinner';

import NotFound from './NotFound';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
      feedback: false,
      showFriend: false
    };
  }

  async componentDidMount() {
    const url = `https://ds-todo-api.now.sh/todos`;

    // fetch(url).then(response => {
    //   response.json().then(data => {
    //     this.setState({ items: data });
    //   });
    // });

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.length === 0)
        this.setState({
          items: data,
          loading: false,
          feedback: false,
          showFriend: true
        });
      else {
        this.setState({
          items: data,
          loading: false,
          feedback: false,
          showFriend: false
        });
      }
    } catch (error) {
      this.setState({ feedback: true });
    }
  }

  handleUpdate = async item => {
    const url = `https://ds-todo-api.now.sh/todos/${item._id}`;
    const status = !item.status;
    this.setState({ loading: true });
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
      });
      await response.json();
      const items = this.state.items;
      const updatedItems = items.map(el => {
        if (item._id === el._id) {
          el.status = !el.status;
        }
        return el;
      });

      this.setState({
        items: updatedItems,
        loading: false,
        feedback: false
      });
    } catch (error) {
      this.setState({ feedback: true });
    }
  };

  handleDelete = async item => {
    const url = `https://ds-todo-api.now.sh/todos/${item._id}`;
    // const status = !item.status;
    this.setState({ loading: true });
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify({ status })
      });
      await response.json();
      const items = this.state.items;
      const deleteItems = items.filter(el => item._id !== el._id)
      this.setState({
        items: deleteItems,
        loading: false,
        feedback: false
      });
    } catch (error) {
      this.setState({ feedback: true });
    }
  };

  handleAddTodo = async value => {
    const url = `https://ds-todo-api.now.sh/todos`;
    this.setState({ loading: true });

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: value })
      });
      const item = await response.json();
      this.setState({
        items: [...this.state.items, item],
        feedback: false,
        showFriend: false,
        loading: false
      });
    } catch (error) {
      this.setState({ feedback: true });
    }
  };

  render() {
    // get the data
    const data = this.state.items;
    // get the items which are not done
    const todos = data.filter(el => !el.status);
    // get the items which are done
    const todones = data.filter(el => el.status);
    // const todos = data.filter(el => {if (!el.status) return el;});

    return (
      <main className="main-container">
        <FormContainer addTodo={this.handleAddTodo} />
        <div className="feedback">
          {this.state.feedback && (
            <small>Oops, our cat brokes the internet. Please try again...</small>
          )}
        </div>
        {this.state.loading && <Spinner />}
        {!this.state.showFriend ? (
          <span>
            <ToDosContainer
              items={todos}
              updateFromChild={this.handleUpdate}
              deleteFromChild={this.handleDelete}
            />
            <ToDonesContainer
              items={todones}
              updateFromChild={this.handleUpdate}
              deleteFromChild={this.handleDelete}
            />
          </span>
        ) : (
            <NotFound />
          )}
      </main>
    );
  }
}

export default MainContainer;
