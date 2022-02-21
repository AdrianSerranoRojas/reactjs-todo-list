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
  const [errorMsg,setErrorMsg]  = useState("");
  const handleChangeInput = (event) => {
      setCreateValue(event.target.value);
  }

  


  const handleSubmit = (e) => {
    e.preventDefault();
    if(createValue === "") {
      setErrorMsg("Please enter at least one character ");
      return;
    }
      setErrorMsg("");
      prevTodos.push({id:uuid(),title:createValue, status:false, isEditing:false})
      setCreateValue("");
      saveLocalStorage(prevTodos);
      setPrevTodos(loadLocalStorage);
      setNumTodo(prevTodos.filter((todos)=>todos.status === false).length);
  }

  const handleBlur = (id) => {
    const updatedTodo = prevTodos.map((todo)=>{
      if(todo.id === id){
        if(todo.isEditing === true){
          return {...todo, isEditing:false}
        }
        return {...todo}
      }
      return todo;
    });
      saveLocalStorage(updatedTodo);
      setPrevTodos(loadLocalStorage);
  }

  const handleIsEditing = (id) => {
    const updatedTodo = prevTodos.map((todo)=>{
      if(todo.id === id){
        setCreateValue(todo.title)
        if(todo.isEditing === false){
          return {...todo, isEditing:true}
        }
          if(createValue === "") {
          setErrorMsg("Please enter at least one character ");
          return todo;
          }
        setErrorMsg("");
        return {...todo, title:createValue, isEditing:false}
      }
      return todo;
    });
      saveLocalStorage(updatedTodo);
      setPrevTodos(loadLocalStorage);
  }

  const handleChangeStatus = (id,newStatus) => {
    const newList = prevTodos.map( (todo) => {
      if (todo.id === id){
        return {...todo,
        status: newStatus};
      }
        return todo;
      }
    )
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

      <CreateTodo
        handleSubmit={handleSubmit}
        handleChangeInput={handleChangeInput}
        errorMsg={errorMsg}
      />

      <Route path="/" exact>
        <TodoList
        numTodo={numTodo}
        prevTodos={prevTodos}
        handleChangeStatus={handleChangeStatus}
        handleRemove={handleRemove}
        handleChangeInput={handleChangeInput}
        handleIsEditing={handleIsEditing}
        handleBlur={handleBlur}
        />
      </Route>

      <Route path="/active" exact>
        <TodoList
        prevTodos={active}
        handleChangeStatus={handleChangeStatus}
        handleRemove={handleRemove}
        handleChangeInput={handleChangeInput}
        handleIsEditing={handleIsEditing}
        handleBlur={handleBlur}
        />
      </Route>

      <Route path="/completed" exact>
        <TodoList
        prevTodos={completed}
        handleChangeStatus={handleChangeStatus}
        handleRemove={handleRemove}
        handleIsEditing={handleIsEditing}
        handleChangeInput={handleChangeInput}
        handleBlur={handleBlur}
        />
      </Route>

      </div>
    </main>
  );
}

export default App;
