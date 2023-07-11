import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');

  // Estado para el modal
  const [openModal, setOpenModal] = useState(false);

  // Contador de todos completados
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  // Filtrar los inputs
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  // Todo complete
  const onComplete = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => {
      return todo.text === text;
    });
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

    saveTodos(newTodos);
  };

  // Todo delete
  const onDelete = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => {
      return todo.text === text;
    });
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  // Add Todo
  const addTodo = (text) => {
    const newTodos = [...todos];
    const newTodo = {
      text: text,
      completed: false,
    };
    newTodos.push(newTodo);
    saveTodos(newTodos);
  };

  return {
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    onComplete,
    onDelete,
    addTodo,
    openModal,
    setOpenModal,
    sincronizeTodos,
  };
}

export { useTodos };
