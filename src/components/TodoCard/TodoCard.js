import React from "react";

import "./TodoCard.scss";

export default function TodoCard({ 
    id,
    title,
    status,
    isEditing,
    handleChangeStatus,
    handleRemove,
    handleIsEditing,
    handleChangeInput
     }) {

    function handleChangeCheckbox(e) {
        handleChangeStatus(id, e.target.checked);
    }
    function handleRemoveTodo(){
        handleRemove(id)
    }
    function todoIsEditing(e){
        e.preventDefault();
        handleIsEditing(id)
    }


    return(
        <div className="todoList__item">
            <input className="checkBox-input" type="checkBox" onChange={handleChangeCheckbox} checked={status}/>
            {
            !isEditing ?(
                <button type="button" onClick={todoIsEditing} className="task">{title}</button>
            ) : (
                <form onSubmit={todoIsEditing}>
                    <input
                        type="text"
                        name="createTodo"
                        onChange={handleChangeInput}
                        defaultValue={title}/>
                    <input
                        type="submit"
                        hidden/>
                </form>
                )
            }
            <button type="button" onClick={handleRemoveTodo}>Close</button>
        </div>
    );
}