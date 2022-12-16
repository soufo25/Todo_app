import React from 'react'

const Todo = ({todos, setTodos, setEdit, toggleCompleted, setEditing, newTitle, isEditing, setNewTitle}) => {

  

  function handleNewTitle(e) {
      setNewTitle(e.target.value);
  }

   const handleDelete = ({id}) => {
    setTodos(todos.filter((todo) => todo.id !== id ));
   };

   
   

  return (
    <div>
      {todos.map((todo) => (
        <ul key={todo.id}
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
       {isEditing?(
        // editTemplate
        <>
         <div className="form-group">
         <label className="todo-label" htmlFor={todo.id}>
           New name for {todo.title}
         </label>
         <input id={todo.id} className="todo-text" type="text" value={newTitle} onChange={handleNewTitle} />
       </div>
       <div className="btn-group">
         <button type="button" className="btn todo-cancel" onClick={()=> setEdit(false)}>
           Cancel
           <span className="visually-hidden">renaming {todo.id}</span>
         </button>
         <button type="submit" className="btn btn__primary todo-edit">
           Save
           <span className="visually-hidden">new name for {todo.id}</span>
         </button>
       </div>
        </>
       ):
       //viewTemplate
        (<>
        
        <div className="c-cb">
          <input key={todo.id} type="checkbox" 
          defaultChecked={todo.completed}
           onChange = {()=> toggleCompleted(todo.id)}/>
          <label className="todo-label" htmlFor={todo.id}>
            {todo.title}
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn">
            Edit <span className="visually-hidden" onClick={()=> setEditing(true)}>{todo.title}</span>
          </button>
          <button type="button" className="btn btn__danger" onClick={() => handleDelete(todo)}>
            Delete <span className="visually-hidden">{todo.title}</span>
          </button>
        </div>
        </>)}
        </ul>))}
    </div>
    
  )
}

export default Todo;
