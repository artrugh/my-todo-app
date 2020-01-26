import React from 'react';
import ToDoItem from './ToDoItem';

export const ToDosContainer = props => {

  const updateItem = item => props.updateFromChild(item);
  const deleteItem = item => props.deleteFromChild(item);
  const data = props.items;

  const todoItems = data.map(el =>
    <ToDoItem
      key={el._id} data={el}
      handleUpdate={updateItem}
      handleDelete={deleteItem}
    />);

  return (
    <div className="todos-container">
      {data.length > 0 && (
        <div className="todos">
          <h5>TODOS</h5>
          {todoItems}
        </div>
      )}
    </div>
  );
}
