import React from 'react'

const Search = props => {


  const handleSearch = (evt) => {
     props.handleSearchTerm(evt.target.value)
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleSearch} value = {props.searchTerm} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
