import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../../context/TodoContext';

function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext)

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