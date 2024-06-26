import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList, QuoteButton }
 */

function TodoApp({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos);

  /** when title is clicked, toggle Todo isDone property */
  function handleTitleClick(id) {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
  }

  /** add a new todo to list */
  function create(formData) {
    const newTodo = { ...formData, id: uuid(), isDone: false };
    setTodos((todos) => [...todos, newTodo]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    const { id } = updatedTodo;

    setTodos(todos.map((todo) => (todo.id === id ? { ...updatedTodo } : todo)));
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <main className="TodoApp">
      <div className="row">
        <div className="col-md-6">
          {todos.length !== 0
            ? <EditableTodoList
              todos={todos}
              handleTitleClick={handleTitleClick}
              update={update}
              remove={remove} />
            : <span className="text-muted">You have no todos.</span>}
        </div>

        <div className="col-md-6">
          {todos.length !== 0 &&
            <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo todos={todos} />
            </section>}
          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm
              handleSave={create} />
          </section>
        </div>
      </div>
    </main>
  );
}

export default TodoApp;
