import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue, loading }) {
  return (
    <div className="search-container">
      <input
        placeholder="Buscar"
        className="TodoSearch"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
        disabled={loading}
      />
    </div>
  );
}

export { TodoSearch };
