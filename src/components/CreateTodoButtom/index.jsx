import './CreateTodoButtom.css';

function CreateTodoButtom({ setOpenModal }) {

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
