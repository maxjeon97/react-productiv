import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 * - handleTitleClick(): fn to toggle isDone property of Todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ todos, update, remove, handleTitleClick }) {
  return (
    <div className="EditableTodoList">
      {todos.map(todo => <EditableTodo
        key={todo.id}
        todo={todo}
        handleTitleClick={handleTitleClick}
        update={update}
        remove={remove} />)}
    </div>
  );
}

export default EditableTodoList;
