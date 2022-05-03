import React, { Component } from 'react';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import Results from '../components/Results';
import SearchBar from '../components/SearchBar';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      loading: false,
      artist: undefined,
      albums: '',
    };
  }

  handleChange = (event) => {
    this.setState({ searchText: event.target.value });
  }

  handleClick = (event) => {
    const { searchText } = this.state;
    event.preventDefault();
    this.setState({ loading: true, artist: searchText }, async () => {
      const albumsSearched = await searchAlbumsAPI(searchText);
      this.setState({ searchText: '', loading: false, albums: albumsSearched });
    });
  }

  render() {
    const { searchText, artist, albums, loading } = this.state;

    return (
      <div>
        {(loading) ? <Loading /> : <SearchBar
          handleClick={this.handleClick}
          handleChange={this.handleChange}
          searchField={searchText}
        />}
        {artist && <Results artist={artist} albums={albums} />}
        <Footer />
      </div>
    );
  }
}

export default Search;
