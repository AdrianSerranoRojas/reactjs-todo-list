import React from "react";

import CreateTodo from "./components/CreateTodo";

import "./App.scss";

function App() {
  const todos = [
    "estudiar HTml",
    "estudiar CSS",
    "estudiar JS"
  ]

  return (
    <main className="container mt-5">
      <section className="row">
        <div className="col col-10">
          <h1>T O D O</h1>
        </div>
        <div>Dark Mode</div>
      </section>
      <CreateTodo todos={todos}/>
      <section className="todoList__container">
        <div className="todoList__item">
          <input type="checkBox" />
          <div className="task">Learn HTML</div>
          <button type="button">Close</button>
        </div>
        <div className="todoList__item">
          <input type="checkBox" />
          <div className="task">Learn CSS</div>
          <button type="button">Close</button>
        </div>
        <div className="todoList__item">
          <input type="checkBox" />
          <div className="task">Learn SASS</div>
          <button type="button">Close</button>
        </div>
      </section>
      <h1>{todos}</h1>
    </main>
  );
}

export default App;
