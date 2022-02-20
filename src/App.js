import React, {useState} from "react";
import { Route } from "react-router-dom";
import {v4 as uuid} from "uuid";

import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList"

import "./App.scss";

import {saveLocalStorage,loadLocalStorage} from "./utils/localStorageHelper";



function App() {

  const [prevTodos, setPrevTodos] = useState(loadLocalStorage());
  const [createValue, setCreateValue] = useState("");
  const [darkState, setDarkStatus] = useState("theme");

  const active = prevTodos.filter((todos)=>todos.status === false);
  const completed = prevTodos.filter((todos)=>todos.status === true);

  const [numTodo, setNumTodo] = useState(active.length);

  const handleChangeInput = (event) => {
      setCreateValue(event.target.value);

  }
  const handleSubmit = (e) => {
      e.preventDefault();
      prevTodos.push({id:uuid(),title:createValue, status:false, isEditing:false})
      saveLocalStorage(prevTodos);
      setPrevTodos(loadLocalStorage);
      setNumTodo(prevTodos.filter((todos)=>todos.status === false).length);
  }

  const handleIsEditing = (id) => {
      const updatedTodo = prevTodos.filter((todo) => todo.id === id)[0];
      const newList = prevTodos.filter((todos) => todos.id !== id);
      if(updatedTodo.isEditing === false){
        updatedTodo.isEditing = true;
      } else{
        updatedTodo.title = createValue;
        updatedTodo.isEditing = false;
      }
      newList.push(updatedTodo);
      saveLocalStorage(newList);
      setPrevTodos(loadLocalStorage);
  }

  const handleChangeStatus = (id, newStatus) => {
    // Find todo
    console.log(prevTodos);
    const changedTodo = prevTodos.filter((todo) => todo.id === id);
    changedTodo[0].status = newStatus;
    changedTodo[0].id = uuid();
    console.log(changedTodo);
    console.log(prevTodos);
    // Get all todo less new todo + add the new todo
    const newList = prevTodos.filter((todos) => todos.id !== id);
    console.log(newList);
    newList.push(changedTodo[0]);
    saveLocalStorage(newList);
    setPrevTodos(loadLocalStorage());
    setNumTodo(prevTodos.filter((todos)=>todos.status === false).length);
  }
  
  const handleRemove = (id) => {
    const newList = prevTodos.filter((todos)=>todos.id !==id);
    saveLocalStorage(newList);
    setPrevTodos(loadLocalStorage());
    setNumTodo(prevTodos.filter((todos)=>todos.status === false).length);
  }

  function handleDarkMode(){
    if (darkState === "theme--dark"){
      setDarkStatus("theme");
    }else{
      setDarkStatus("theme--dark");
    }
  }

  return (
    <main className={darkState}>
      <div className="backgroundImage">
        <div className="backgroundDeg"/>
      </div>
      <div className="content">

      <section className="row">
        <div className={`col col-10" ${darkState}`}>
          <h1>T O D O</h1>
        </div>
        <button className="dark-btn" type="button" onClick={handleDarkMode}>
          {darkState=== "theme" ? "☽" :"☼" }
        </button>
      </section>

      <CreateTodo handleSubmit={handleSubmit} handleChangeInput={handleChangeInput}/>

      <Route path="/" exact>
        <TodoList
        numTodo={numTodo}
        prevTodos={prevTodos}
        handleChangeStatus={handleChangeStatus}
        handleRemove={handleRemove}
        handleChangeInput={handleChangeInput}
        handleIsEditing={handleIsEditing}
        />
      </Route>

      <Route path="/active" exact>
        <TodoList
        prevTodos={active}
        handleChangeStatus={handleChangeStatus}
        handleRemove={handleRemove}
        handleChangeInput={handleChangeInput}
        handleIsEditing={handleIsEditing}
        />
      </Route>

      <Route path="/completed" exact>
        <TodoList
        prevTodos={completed}
        handleChangeStatus={handleChangeStatus}
        handleRemove={handleRemove}
        handleIsEditing={handleIsEditing}
        handleChangeInput={handleChangeInput}
        />
      </Route>

      </div>
    </main>
  );
}

export default App;
