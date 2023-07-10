import './styles.css'

function EmptySearchResult({searchText}) {
  return (
    <p className='EmptySearchResult__p'>No se encontraron resultados para {searchText}</p>
  )
}

export { EmptySearchResult }