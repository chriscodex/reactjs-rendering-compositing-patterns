import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <div className="search-container">
      <input
        placeholder="Buscar"
        className="TodoSearch"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}

export { TodoSearch };
