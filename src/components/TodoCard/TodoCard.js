import React from "react";

import "./TodoCard.scss";

export default function TodoCard({ title, handleChangeStatus }) {

    function handleChangeCheckbox(e) {
        handleChangeStatus(title, e.target.checked);
    }

    return(
        <div className="todoList__item">
          <input type="checkBox" onChange={handleChangeCheckbox}/>
          <div className="task">{title}</div>
          <button type="button">Close</button>
        </div>
    );
}