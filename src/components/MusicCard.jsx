import PropTypes from 'prop-types';
import React, { Component } from 'react';

class MusicCard extends Component {
  render() {
    const {
      music: { trackName, previewUrl, trackId, artworkUrl30 },
      showImage,
      handleChange,
      checked,
      label } = this.props;
    return (
      <div>
        <hr />
        <li>
          <div>
            {showImage ? <img src={artworkUrl30} alt="capa da música" /> : null}
            {trackName}
          </div>
          <div>
            <audio
              src={previewUrl} controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              <code>audio</code>
              .
            </audio>
            <label htmlFor={trackId}>
              <input
                name="music"
                type="checkbox"
                id={trackId}
                onChange={handleChange}
                checked={checked}
              />
              <span>{label}</span>
            </label>
          </div>
        </li>
      </div>
    );
  }
}

MusicCard.propTypes = {
  music: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  checked: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  showImage: PropTypes.bool.isRequired,
};

export default MusicCard;
