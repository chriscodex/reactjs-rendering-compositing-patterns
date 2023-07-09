import { TodoHeader } from '../components/TodoHeader';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButtom } from '../components/CreateTodoButtom';
import { TodosLoading } from '../components/TodosLoading';
import { TodosError } from '../components/TodosError';
import { EmptyTodos } from '../components/EmptyTodos';
import { Modal } from '../components/Modal';
import { TodoForm } from '../components/TodoForm';
import { useTodos } from './useTodos';

function App() {
  const {
    loading,
    error,
    searchedTodos,
    onComplete,
    onDelete,
    openModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    setOpenModal,
    addTodo,
  } = useTodos();

  return (
    <>
      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => onComplete(todo.text)}
            onDelete={() => onDelete(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButtom setOpenModal={setOpenModal} />
      {openModal && (
        <Modal>
          <TodoForm
            openModal={openModal}
            setOpenModal={setOpenModal}
            addTodo={addTodo}
          ></TodoForm>
        </Modal>
      )}
    </>
  );
}

export default App;
