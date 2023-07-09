import './TodoSearch.css';
import { TodoContext } from '../../context/TodoContext';
import { useContext } from 'react';

function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
  } = useContext(TodoContext)

  return (
    <div className='search-container'>
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