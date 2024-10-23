import React from 'react';

function TodoItem({ todo, onEdit, onDelete }) {
  return (
    <li className="todo-item">
      <span>{todo}</span>
      <div className="action-buttons">
        <button className="edit-btn" onClick={onEdit}>Edit</button>
        <button className="delete-btn" onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
}

export default TodoItem;
