import React, { useState } from "react";
import "./Todo.css";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 * - handleTitleClick(): fn to toggle isDone property of Todo
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({ todo, handleTitleClick }) {
  const { id, title, description, priority, isDone } = todo;

  return (
      <div className="Todo" id={id}>
        <div
        className={ isDone ? "Todo-title Todo-done" : "Todo-title" }
        onClick={() => handleTitleClick(id)}><b>{title}</b><small>(priority: {priority})</small></div>
        <div><small>{description}</small></div>
      </div>
  );
}

export default Todo;
