import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import favoriteIcon from '../images/whiteHeartIcon.svg';
import { getUser } from '../services/userAPI';
import '../styles/Header.css';
import Loading from './Loading';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      user: undefined,
    };
  }

  componentDidMount() {
    this.onMount();
  }

  onMount = () => {
    const { user } = this.state;
    if (!user) {
      this.setState({ loading: true }, async () => {
        const userData = await getUser();
        this.setState({ loading: false, user: userData.name });
      });
    }
  }

  render() {
    const { loading, user } = this.state;
    if (loading) return <Loading />;

    return (
      <>
        <header className="header">
          <Link className="profile-top-btn" to="/profile">
            <img
              value={user}
              alt="profile icon"
              src={profileIcon}
            />
          </Link>
          <Link className="search-top-btn" to="/search">
            <img
              alt="search icon"
              src={searchIcon}
            />
          </Link>
          <Link className="favorite-top-btn" to="/favorites">
            <img
              alt="favorite icon"
              src={favoriteIcon}
            />
          </Link>
        </header>
      </>
    )
  }
}

export default Header;
