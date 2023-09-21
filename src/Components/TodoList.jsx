import React from "react";
import TodoItems from "./TodoItems";

const TodoList = ({ todos, toggleTodo, deleteTodos }) => {
  return (
    <>
      <ul className="list">
        {todos.length === 0 && "No Item is added"}
        {todos.map((todo) => (
          <TodoItems
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodos={deleteTodos}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
