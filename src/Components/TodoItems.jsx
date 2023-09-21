import React from "react";

const TodoItems = ({ completed, id, title, toggleTodo, deleteTodos }) => {
  return (
    <>
      <li>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => {
              toggleTodo(id, e.target.checked);
            }}
          />
          {title}
        </label>
        <button className="btn btn-danger" onClick={() => deleteTodos(id)}>
          Delete
        </button>
      </li>
    </>
  );
};

export default TodoItems;
