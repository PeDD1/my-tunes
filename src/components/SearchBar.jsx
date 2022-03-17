import PropTypes from 'prop-types';
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, handleClick, handleChange } = this.props;
    return (
      <form>
        <input
          type="text"
          onChange={handleChange}
          value={searchText}
          placeholder="Nome do Artista"
        />
        <button
          onClick={handleClick}
          type="submit"
          data-testid="search-artist-button"
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
