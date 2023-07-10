import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading }) {
  
  let content;
  if (loading) {
    content = <h1 className={'TodoCounter TodoCounter__loading'}>Cargando To-Do&apos;s</h1>;
  } else if (completedTodos===0 && completedTodos === totalTodos) {
    content = <h1 className='TodoCounter'>Crea tu primer To-Do</h1>;
  } else if (completedTodos!==0 && completedTodos === totalTodos) {
    content = <h1 className='TodoCounter'>Has completado todos tus To-Do&apos;s 🥳</h1>;
  }else {
    content = (
      <h1 className='TodoCounter'>
        Has completado <span> {completedTodos} </span> de <span>{totalTodos}</span> To-Do&apos;s
      </h1>
    );
  }

  return (content);
}

export { TodoCounter };