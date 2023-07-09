import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue)
  
  const [loading, setLoading] = React.useState(true)
  
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
      
        let parsedItem
    
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        }
  
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }, 1500);
  }, [initialValue, itemName])

  /* Actualiza el estado de los todos y los guarda en local storage */
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return {
    item, 
    saveItem,
    loading,
    error
  }
}

export { useLocalStorage }

// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: 'Tarea 1', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Tarea 2', completed: false },
//   { text: 'Tarea 3', completed: false },
//   { text: 'Tarea 4', completed: true },
// ];

// const stringifiedTodos = JSON.stringify(defaultTodos)

// localStorage.setItem('TODOS_V1', stringifiedTodos)