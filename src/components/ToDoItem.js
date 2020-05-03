import React from 'react';

const ToDoItem = props => {

  // update the state of the item
  const updateItem = e => {
    e.preventDefault();
    const item = props.data;
    props.handleUpdate(item);
  }
  // or delete
  const deleteItem = e => {
    e.preventDefault();
    const item = props.data;
    props.handleDelete(item);
  }

  return (
    <div className="item">
      <p>{props.data.text}</p>
      <div className="button-container">
        <button className="btn item-button" onClick={updateItem}>
          {props.data.status ? <i className="far fa-check-square"></i> : <i class="far fa-square"></i>}
        </button>
        <button className="delete-icon" onClick={deleteItem}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
