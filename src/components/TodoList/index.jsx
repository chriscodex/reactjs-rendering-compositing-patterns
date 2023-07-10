import './TodoList.css';

function TodoList({
  error,
  loading,
  totalTodos,
  searchText,
  searchedTodos,
  onLoading,
  onError,
  onEmpty,
  onEmptySearchResult,
  children,
}) {
  return (
    <section className="TodoList-container">
      {error && onError()}
      {loading && onLoading()}
      {(!loading && !totalTodos) && onEmpty()}
      {(!!totalTodos && !searchedTodos.length) && onEmptySearchResult(searchText)}
      {totalTodos !==0 && searchedTodos.map((todo) => children(todo))}
    </section>
  );
}

export { TodoList };
