import React from 'react';
import ToDoItem from './ToDoItem';

export const ToDonesContainer = props => {
  // get the data from props and pass it as props
  const data = props.items;
  // create events and pass them as props
  const updateItem = id => props.updateFromChild(id);
  const deleteItem = id => props.deleteFromChild(id);

  const todoneItems = data.map(el =>
    <ToDoItem
      key={el._id}
      data={el}
      handleUpdate={updateItem}
      handleDelete={deleteItem}/>);

  return (
    <div className="todos-container">
      {data.length > 0 &&
        (<div className="todones">
          <h5>{props.name}</h5>
          {todoneItems}
        </div>
        )}
    </div>
  );
}
