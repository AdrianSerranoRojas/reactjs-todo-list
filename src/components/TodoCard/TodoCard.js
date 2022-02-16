import React from "react";

import "./TodoCard.scss";

export default function TodoCard({ title, status, handleChangeStatus, handleRemove }) {

    function handleChangeCheckbox(e) {
        handleChangeStatus(title, e.target.checked);
    }
    function handleRemoveTodo(){
        handleRemove(title)
    }

    return(
        <div className="todoList__item">
            <input className="checkBox-input" type="checkBox" onChange={handleChangeCheckbox} checked={status}/>
            <div className="task">{title}</div>
            <button type="button" onClick={handleRemoveTodo}>Close</button>
        </div>
    );
}