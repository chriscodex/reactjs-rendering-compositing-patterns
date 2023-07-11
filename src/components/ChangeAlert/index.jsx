import { withStorageListener } from './withStorageListener';

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div>
        <p>ChangeAlert</p>
      </div>
    );
  } else {
    return null
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
