import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getUser } from '../services/userAPI';
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
      <header>
        <Link to="/profile">
          <p>{user}</p>
        </Link>
        <nav>
          <NavLink to="/search">
            Procurar Artistas
          </NavLink>
          <NavLink to="/favorites">
            Favoritos
          </NavLink>
          <NavLink to="/profile">
            Perfil
          </NavLink>
        </nav>
      </header>
    )
  }
}

export default Header;
