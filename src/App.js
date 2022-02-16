import React, {useState} from "react";

import CreateTodo from "./components/CreateTodo";
import TodoCard from "./components/TodoCard";

import "./App.scss";

import {saveLocalStorage,loadLocalStorage} from "./utils/localStorageHelper";


function App() {

  const [prevTodos, setPrevTodos] = useState(loadLocalStorage());
  const [createValue, setCreateValue] = useState("");

  const handleChangeInput = (event) => {
      setCreateValue(event.target.value);
  }
  const handleSubmit = (e) => {
      e.preventDefault();
      prevTodos.push({title:createValue, status:false})
      saveLocalStorage(prevTodos);
      setPrevTodos(loadLocalStorage);
  }

  const handleChangeStatus = (title, status) => {
    // Find todo
    const changedTodo = prevTodos.find((todo) => todo.title === title);
    changedTodo.status = status;
    
    // Get all todo less new todo + add the new todo
    const newList = prevTodos.filter((todos) => todos.title !== title);
    newList.push(changedTodo);

    saveLocalStorage(prevTodos);
    setPrevTodos(loadLocalStorage);
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
        {prevTodos.map( (todos) => (
          <TodoCard key={todos.title} title={todos.title} handleChangeStatus={handleChangeStatus}/>
        )
        )}
      </section>
    </main>
  );
}

export default App;
