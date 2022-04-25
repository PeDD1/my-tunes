import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AlbumDetail from '../components/AlbumDetail';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import getMusics from '../services/musicsAPI';

const albumData = 1;

class Album extends Component {
  constructor() {
    super();
    this.state = {
      musics: [],
      loading: true,
      favorites: [],
    };
  }

  componentDidMount() {
    this.getMusics();
    this.getFavoriteSongs();
  }

  getMusics = () => {
    const { match: { params: { id } } } = this.props;
    getMusics(id).then((response) => this.setState({
      musics: response,
      favorites: [],
      loading: false,
    }));
  }

  getFavoriteSongs = () => {
    this.setState({ loading: true }, () => (
      getFavoriteSongs()
        .then((response) => this.setState({ loading: false, favorites: response }))
    ));
  }

  handleChange = ({ target: { checked, id } }) => {
    const { musics } = this.state;
    const favoriteMusic = musics.find(({ trackId }) => trackId === Number(id));
    this.setState({ loading: true }, () => (
      checked ? addSong(favoriteMusic) : removeSong(favoriteMusic)).then(() => {
        this.setState({ loading: false });
        this.getFavoriteSongs();
      }));
  }

  isFavorite = ({ trackId }) => {
    const { favorites } = this.state;
    return favorites.some((music) => trackId === music.trackId);
  }

  render() {
    const { musics, loading } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        {loading ? <Loading />
          : (
            <div>
              <AlbumDetail albumInfo={musics[0]} />
              <ul>
                {musics.slice(albumData).map((music) => (
                  <MusicCard
                    showImage={false}
                    music={music}
                    key={music.trackId}
                    checked={this.isFavorite(music)}
                    handleChange={this.handleChange}
                  />))}
                <hr />
              </ul>
            </div>)}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Album;
