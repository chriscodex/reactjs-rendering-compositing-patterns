import React from "react";
import './TodoCounter.css';
import { TodoContext } from '../../context/TodoContext';

function TodoCounter() {
  const { totalTodos, completedTodos, loading } = React.useContext(TodoContext)
  
  let content;
  if (loading) {
    content = <h1 className='TodoCounter'>Cargando To-Do's</h1>;
  } else if (completedTodos===0 && completedTodos === totalTodos) {
    content = <h1 className='TodoCounter'>Crea tu primer To-Do</h1>;
  } else if (completedTodos!==0 && completedTodos === totalTodos) {
    content = <h1 className='TodoCounter'>Has completado todos tus To-Do's 🥳</h1>;
  }else {
    content = (
      <h1 className='TodoCounter'>
        Has completado <span> {completedTodos} </span> de <span>{totalTodos}</span> To-Do's
      </h1>
    );
  }

  return (content);
}

export { TodoCounter };