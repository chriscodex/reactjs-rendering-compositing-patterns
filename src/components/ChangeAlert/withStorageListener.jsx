import { useState } from 'react'

function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener({sincronize}) {
    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener('storage', (change) => {
      if (change.key === 'TODOS_V1') {
        console.log('Hubo cambios')
        setStorageChange(true)
      }
    })

    const toggleShow = () => {
      setStorageChange(false)
      sincronize()
    }
    
    return (
      <WrappedComponent show={storageChange} toggleShow={toggleShow}/>
    )
  }
}

export { withStorageListener }