import React from 'react';
import { Modal, Box } from '@mui/material';
import { TodoContext } from '../../context/TodoContext';
import './TodoForm.css';

function TodoForm({ children }) {
  const { openModal, setOpenModal, addTodo } = React.useContext(TodoContext);

  /* Eventos del nuevo to-do */
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  /* Eventos del modal */
  const closeModal = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setOpenModal(false);
    addTodo(newTodoValue)
  };

  return (
    <div>
      <Modal
        open={openModal}
        onClose={closeModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box className="modal">
          <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo To-Do</label>
            <textarea
              placeholder="Nuevo To-Do"
              value={newTodoValue}
              onChange={onChange}
            ></textarea>
            <div className="TodoForm-buttonContainer">
              <button
                onClick={closeModal}
                className="TodoForm-button TodoForm-button--cancel"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="TodoForm-button TodoForm-button--add"
              >
                Añadir
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export { TodoForm };
