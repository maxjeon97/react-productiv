import React from "react";
import QuoteButton from "./QuoteButton";
import TodoApp from "./TodoApp";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

/** Site application.
 *
 * Props:
 * none
 *
 * State:
 *
 *
 * App -> TodoApp
 **/

function App() {
  return (
    <main className="App">
      <header className="container-fluid pt-4 pb-1">
        <div className="container">
          <h1>Prøductïv</h1>
          <p className="lead">The best name in todo list management.</p>
        </div>
        <QuoteButton />
      </header>

      <section className="container mt-4">
        <TodoApp
          initialTodos={[
            {
              id: 1,
              title: "Code!",
              description: "Write some code",
              priority: 2,
              isDone: false,
            },
            {
              id: 2,
              title: "Make dinner",
              description: "Cook something healthy",
              priority: 1,
              isDone: false,
            },
            {
              id: 3,
              title: "Go to bed",
              description: "In bed by 11:15",
              priority: 3,
              isDone: false,
            },
          ]}
        />

        <Footer />
      </section>
    </main>
  );
}

export default App;
