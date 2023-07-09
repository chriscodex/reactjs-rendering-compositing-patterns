import { useContext } from 'react';
import './CreateTodoButtom.css';
import { TodoContext } from '../../context/TodoContext';

function CreateTodoButtom() {
  const { setOpenModal } = useContext(TodoContext);

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
