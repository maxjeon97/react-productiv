import React from "react";
import Todo from "./Todo";
import "./TopTodo.css";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo -> Todo
 */

function TopTodo({ todos }) {
  // lowest-priority # is the highest priority
  const uncompletedTodos = todos.filter(todo => todo.isDone === false);

  let top = uncompletedTodos.reduce(
    (acc, cur) => cur.priority < acc.priority ? cur : acc, uncompletedTodos[0]);

  return (
    <div className="TopTodo">
      <Todo todo={top} />
    </div>
  );
}

export default TopTodo;