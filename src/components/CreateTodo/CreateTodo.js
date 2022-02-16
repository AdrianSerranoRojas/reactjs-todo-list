import React ,{useState} from "react";

export default function CreateTodo({todos}) {

    const [createValue, setCreateValue] = useState("");

    function handleChangeInput(event){
        setCreateValue(event.target.value);
    }

    function handleSubmit(e){
        console.log(todos)
        e.preventDefault();
        todos.push(createValue);
    }

    return(
        <section>
            <form onSubmit={handleSubmit}>
                <input type="text" name="createTodo" onChange={handleChangeInput}/>
                <input type="submit" />
                <h1>{createValue}</h1>
            </form>
        </section>
    );
}