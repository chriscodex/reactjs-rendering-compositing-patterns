import { Children, cloneElement } from 'react';
import './styles.css';

function TodoHeader({ children, loading }) {

  return (
    <header>
      {Children.toArray(children).map((child) => {
        return cloneElement(child, {
          loading: loading,
        });
      })}
    </header>
  );
}

export { TodoHeader };
