import React from 'react';
import './CreateTodoButtom.css';
import { TodoContext } from '../../context/TodoContext';

function CreateTodoButtom() {
  const { setOpenModal } = React.useContext(TodoContext);

  const onClickButtom = () => {
    setOpenModal(true)
  };

  return (
    <button className="CreateTodoButtom" onClick={onClickButtom}>
      +
    </button>
  );
}

export { CreateTodoButtom };
