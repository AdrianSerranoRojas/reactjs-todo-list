import React from "react";

import "./App.scss";

function App() {
  return (
    <main className="container mt-5">
      <section className="row">
        <div className="col col-10">
          <h1>T O D O</h1>
        </div>
        <div>Dark Mode</div>
      </section>
      <section className="createInput">
        <form>
          <input type="text" name="new-task" />
        </form>
      </section>
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
    </main>
  );
}

export default App;
