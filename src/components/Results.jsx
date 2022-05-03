import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Results.css';

class Results extends Component {
  render() {
    const { artist, albums } = this.props;

    if (albums.length === 0) return (<h4>Nenhum álbum foi encontrado</h4>);

    return (
      <div className="results">
        <h3>
          Resultado de álbuns de:
          {' '}
          {artist}
        </h3>
        <ul>
          {albums.map(({ collectionId, artistName, collectionName, artworkUrl100 }) => (
            <Link
              key={collectionId}
              to={`/album/${collectionId}`}
            >
              <div>
                <li>
                  <img
                    alt="capa album"
                    src={artworkUrl100}
                  />
                  <p>{collectionName}</p>
                  <p>{artistName}</p>
                </li>
                <hr />
              </div>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

Results.propTypes = {
  artist: PropTypes.string.isRequired,
  albums: PropTypes.arrayOf(PropTypes.array).isRequired,
  length: PropTypes.number.isRequired,
};


export default Results;
