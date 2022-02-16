import React, {useState} from "react";

import CreateTodo from "./components/CreateTodo";

import "./App.scss";

import {saveLocalStorage,loadLocalStorage} from "./utils/localStorageHelper";


function App() {

  const prevTodos = loadLocalStorage();
  const [createValue, setCreateValue] = useState("");

    const handleChangeInput = (event) => {
        setCreateValue(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        prevTodos.push({title:createValue, status:false})
        saveLocalStorage(prevTodos);
    }

  return (
    <main className="container mt-5">
      <section className="row">
        <div className="col col-10">
          <h1>T O D O</h1>
        </div>
        <div>Dark Mode</div>
      </section>
      <CreateTodo handleSubmit={handleSubmit} handleChangeInput={handleChangeInput}/>
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
