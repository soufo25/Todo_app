import React from 'react';
import {v4 as uuidv4} from "uuid";

const Form = ({input, setInput, todos, setTodos, setEdit, setNewTitle}) => {

    
    
     const HandleChange = (e) => {
            setInput(e.target.value)
    };

    const HandleSubmit = (e) =>{
        e.preventDefault()
      setTodos([...todos, {id: uuidv4(), title: input, completed: false}])
        setInput("");
        setNewTitle("")
        setEdit(false)
        
        
    };

  return (
         <form onSubmit={HandleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text" placeholder='Add new task'
        autoComplete="off" value={input}
        required={true}
        onChange={HandleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form> 
  )
}

export default Form;
