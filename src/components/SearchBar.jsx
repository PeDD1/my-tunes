import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../styles/SearchBar.css';

class SearchBar extends Component {
  render() {
    const { searchText, handleClick, handleChange } = this.props;
    return (
      <form className="search-bar">
        <input
          className="search-bar-input"
          type="text"
          onChange={handleChange}
          value={searchText}
          placeholder="Nome do Artista"
        />
        <button
          className="search-bar-button"
          onClick={handleClick}
          type="submit"
        >
          Pesquisar
        </button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchField: PropTypes.string,
  handleClick: PropTypes.func,
  handleChange: PropTypes.func,
  length: PropTypes.number,
}.isRequired;

export default SearchBar;
