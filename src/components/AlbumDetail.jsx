import PropTypes from 'prop-types';
import React, { Component } from 'react';

class AlbumDetail extends Component {
  render() {
    const { albumInfo: { artistName, collectionName, artworkUrl100 } } = this.props;
    return (
      <div>
        <div>
          <img src={artworkUrl100} alt="capa do álbum" />
          <h2>{artistName}</h2>
          <h5>{collectionName}</h5>
        </div>
      </div>
    );
  }
}

AlbumDetail.propTypes = {
  albumInfo: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default AlbumDetail;
