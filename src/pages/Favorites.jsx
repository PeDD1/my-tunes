import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      favorites: [],
    };
  }

  componentDidMount() {
    this.onMount();
  }

  onMount = () => {
    this.setState({ loading: true }, async () => {
      const favoriteSongs = await getFavoriteSongs();
      this.setState({ loading: false, favorites: favoriteSongs });
    });
  }

  handleChange = ({ target: { id } }) => {
    const { favorites } = this.state;
    const favoriteMusic = favorites.find(({ trackId }) => trackId === Number(id));
    this.setState({ loading: true }, async () => {
      await removeSong(favoriteMusic);
      const favoriteSongs = await getFavoriteSongs();
      this.setState({ loading: false, favorites: favoriteSongs });
    });
  }

  isFavorite = ({ trackId }) => {
    const { favorites } = this.state;
    return favorites.some((music) => trackId === music.trackId);
  }

  render() {
    const { loading, favorites } = this.state;

    return (
      <div data-testid="page-favorites">
        <Header />
        {(loading) ? <Loading />
          : (
            <div className="favorite-list">
              <h2>Músicas Favoritas</h2>
              {favorites.map((favorite) => (
                <MusicCard
                  showImage
                  key={favorite.trackId}
                  music={favorite}
                  handleChange={this.handleChange}
                  checked={this.isFavorite(favorite)}
                  label="Favorita"
                />
              ))}
            </div>)}
      </div>
    );
  }
}

export default Favorites;
