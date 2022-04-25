import PropTypes from 'prop-types';
import React, { Component } from 'react';

class AlbumDetail extends Component {
  render() {
    const { albumInfo: { artistName, collectionName, artworkUrl100 } } = this.props;
    return (
      <div>
        <div>
          <img src={artworkUrl100} alt="artwork" />
          <h2 data-testid="artist-name">
            {artistName}
          </h2>
          <h5 data-testid="album-name">
            {collectionName}
          </h5>
        </div>
      </div>
    );
  }
}

AlbumDetail.propTypes = {
  albumInfo: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default AlbumDetail;