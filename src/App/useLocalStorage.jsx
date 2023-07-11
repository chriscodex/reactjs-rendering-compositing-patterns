import { useEffect, useState } from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue)
  
  const [loading, setLoading] = useState(true)
  
  const [error, setError] = useState(false)

  const [sincronizedItem, setSincronizedItem] = useState(true)

  useEffect(() => {
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

        setSincronizedItem(true)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }, 1500);
  }, [sincronizedItem])

  /* Actualiza el estado de los todos y los guarda en local storage */
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  const sincronizeItem = () => {
    setLoading(true)
    setSincronizedItem(false)
  }

  return {
    item, 
    saveItem,
    loading,
    error,
    sincronizeItem
  }
}

export { useLocalStorage }