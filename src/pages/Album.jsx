import React, { Component } from 'react';
import AlbumDetail from '../components/AlbumDetail';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }
  render() {
    const { loading } = this.state;

    return (
      <div>
        <Header />
        {loading ? <Loading />
          : (
            <div>
              <AlbumDetail />
              <ul>
                <MusicCard />
                <hr />
              </ul>
            </div>
          )
        }
      </div>
    )
  }
}

export default Album;
