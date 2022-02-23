import React from "react";

import "./CreateTodo.scss";

export default function CreateTodo({handleSubmit, handleChangeInput, errorMsg}) {

function ClearInput(e){
    e.target.reset();
    handleSubmit(e);
}

    return(
        <section className="create__section">
            <form onSubmit={ClearInput}>
                <input className=""type="text" name="createTodo" onChange={handleChangeInput}/>
                <input type="submit" hidden/>
            </form>
            {errorMsg === "" ? (
            <p>{errorMsg}</p>
            ):
            (
            <div className="errorMSg" data-testid="create-todo-error-message" >
            <p>{errorMsg}</p>
            </div>
            )
            }
        </section>
    );
}