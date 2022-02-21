import {React} from 'react';
import {DragDropContext, Droppable} from "react-beautiful-dnd";

import TodoCard from "../TodoCard";

import "./TodoList.scss";

export default function TodoList({
    prevTodos,
    handleChangeStatus,
    handleRemove,
    handleIsEditing,
    handleChangeInput,
    handleBlur,
    errorMsg,
    settingPrevTodos
}) {
    function handleSetPrevTodos(source,destination){
        settingPrevTodos(source,destination);
    }
    return (
        <section className="todoList__container">
            <DragDropContext onDragEnd={(result)=> {
                const {source, destination} = result;
                if(!destination){
                    return;
                }
                if(source.index === destination.index){
                    return;
                }
                handleSetPrevTodos(source,destination)
                 } }>
            <Droppable droppableId='todo'>
            {(droppableProvided)=>(
            <ul
                className="ul-list"
                {...droppableProvided.droppableProps}
                ref={droppableProvided.innerRef}
            >
            {prevTodos.map((todos, index) => (
                <TodoCard
                key={todos.id}
                id={todos.id}
                title={todos.title}
                status={todos.status}
                handleChangeStatus={handleChangeStatus}
                handleRemove={handleRemove}
                handleIsEditing={handleIsEditing}
                isEditing={todos.isEditing}
                handleChangeInput={handleChangeInput}
                handleBlur={handleBlur}
                errorMsg={errorMsg}
                index = {index}
                />
            )
            )}
            {droppableProvided.placeholder}
            </ul>)}
            </Droppable>
            </DragDropContext>
            <footer>
                <p>{prevTodos.filter((active)=>active.status===false).length} items left</p>
                <div className="link-container">
                    <a href="./">All</a>
                    <a href="./active">Active</a>
                    <a href="./completed">Completed</a>
                </div>
                <button type="button">Clear Completed</button>
            </footer>
        </section>
    )
}