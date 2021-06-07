import React from "react";

const Form =({inputText,setInputText, todos, setTodos,setStatus})=>{
    const inputTextHnadler =(e)=>{
          setInputText(e.target.value);
    };
    const submitTodoHandler =(e) =>{
        e.preventDefault();
        setTodos([
            ...todos,
            {text:inputText, completed:false, id: Date.now()} 
        ])
        setInputText('');
    }

    const statusHandler=(e)=>{
        setStatus(e.target.value)
    }
    return(
        <form>
            <input 
                value={inputText}
                onChange={inputTextHnadler} 
                type="text" 
                className="todo-input" />
            <button onClick={submitTodoHandler } className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
         </form>
    )
}

export default Form;
