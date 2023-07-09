import './TodoList.css';

function TodoList({
  error,
  loading,
  searchedTodos,
  onLoading,
  onError,
  onEmpty,
  renderItem,
  children,
}) {
  return (
    <section className="TodoList-container">
    {error && onError()}
      {loading && onLoading()}
      {(!loading && searchedTodos.length === 0) && onEmpty()}
      {searchedTodos.map((todo) => (
        renderItem(todo)
      ))} 
      <ul>{children}</ul>
    </section>
  );
}

export { TodoList };
