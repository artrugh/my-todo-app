import React from 'react';
import ToDoItem from './ToDoItem';

export const ToDonesContainer = props => {

  const updateItem = id => props.updateFromChild(id);
  const deleteItem = id => props.deleteFromChild(id);
  const data = props.items;
  const todoneItems = data.map(el => 
  <ToDoItem 
  key={el._id} data={el}
  handleUpdate={updateItem} 
  handleDelete = {deleteItem}
  />);

  return (
    <div className="todones-container">
      {data.length > 0 && (
        <div className="todones">
          <h5>BACKLOG</h5>
          {todoneItems}
        </div>
      )}
    </div>
  );
}
